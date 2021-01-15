


import { useEffect, useState } from "react";
import "./HomePage.css";

import { useSelector } from "react-redux";
import GameComponent from "./GameComponent";

const URL = "/code-challenge/";
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


const GamesList = ()=>{


    const categories = useSelector(state => state.filters.categories);
    const title = useSelector(state => state.filters.title)
    let [gamesList, setGamesList] = useState([]);
    const sort_by = useSelector(state => state.filters.sort_by);
    
    const platform = useSelector(state => state.filters.platform);



    useEffect(() => {
        const fetchData = async () => {
            let queryObject = {};
            
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
            if (sort_by !== "") {
                queryObject['sort-by'] = sort_by;
            }
            const data = await fetchGames(queryObject);
            setGamesList(data);
        }
        fetchData();

    }, [sort_by, platform, categories]);


    return (
        
        gamesList.length && gamesList.map((game) => <GameComponent key={game.id} game={game} gameTitleSearch={title}/>)
    )
}


export default GamesList;