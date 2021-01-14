import "./HomePage.css";
import { useEffect, useState } from "react";
import CategoryComponent from "./CategoryComponent";
import TitleSearchComponent from "./TitleSearchComponent";
import PlatformComponent from "./PlatformComponent";
import SortByComponent from "./SortByComponent";
import {

    Link
} from "react-router-dom";
import { useSelector } from "react-redux";
const URL = "https://api.dev.cloud.barbooksaustralia.com/code-challenge/";
function renderGame(game, gameTitleSearch) {

    return (
        game.title.toLowerCase().includes(gameTitleSearch.toLowerCase()) ? <div className="gameBox" key={game.id}>
            <div className="gameTitle">
                {game.title}
            </div>
            <div className="gameDetails">
                <div className="gameImage">
                    <img alt="someimage" src={`${URL}${game.thumbnail}`} />
                </div>
                <div className="gameDescription">
                    {game.shortDescription}
                </div>
                <Link to={"/details?id=" + game.id}>{"View More"}</Link>


            </div>
        </div> : null)
}
const encodeQueryString = (params) => {
    const keys = Object.keys(params)
    return keys.length
        ? "?" + keys
            .map(key => encodeURIComponent(key)
                + "=" + encodeURIComponent(params[key]))
            .join("&")
        : ""
}
const fetchGames = async (queryObject) => {
    let GEN_URL = `${URL}api/games`;
    if (queryObject.tag) {
        GEN_URL = `${URL}api/filter`;
    }
    const QUERY_PARAMS = encodeQueryString(queryObject);
    console.log(`${GEN_URL}${QUERY_PARAMS}`);
    const response = await fetch(`${GEN_URL}${QUERY_PARAMS}`);
    const data = await response.json()

    return data

}
function HomePageComponent() {
    const categories = useSelector(state => state.filters.categories);
    const title = useSelector(state => state.filters.title)

    let [gamesList, setGamesList] = useState([]);

    const sort_by = useSelector(state => state.filters.sort_by);


    
    const platform = useSelector(state => state.filters.platform);



    useEffect(() => {
        const fetchData = async () => {
            let queryObject = {};
            if (sort_by !== "") {
                queryObject['sort-by'] = sort_by;
            }
            if (platform !== "") {
                queryObject['platform'] = platform;
            }
            if (categories.length) {
                if (categories.length === 1) {
                    queryObject['category'] = categories[0]
                } else {
                    queryObject['tag'] = categories.join(".")
                }
            }
            const data = await fetchGames(queryObject);
            setGamesList(data);
        }
        fetchData();
        
    }, [sort_by, platform, categories]);

    return (
        <div>
            <CategoryComponent />
            <TitleSearchComponent />
            <SortByComponent />
            <PlatformComponent />
            <div>
                {gamesList.length && gamesList.map((game) => {
                    return renderGame(game, title)
                })}</div></div>
    )
}


export default HomePageComponent;