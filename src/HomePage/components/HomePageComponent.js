import "./HomePage.css";
import { useEffect, useState } from "react";
const URL = "https://api.dev.cloud.barbooksaustralia.com/code-challenge/";
function renderGame(game,gameTitleSearch) {
    return (
        <div key={game.id}>
        {
        game.title.toLowerCase().includes(gameTitleSearch.toLowerCase())&&<div className="gameBox" key={game.id}>
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
        </div>
    </div>}</div>)
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
    const QUERY_PARAMS = encodeQueryString(queryObject);
    console.log(`${GEN_URL}${QUERY_PARAMS}`);
    const response = await fetch(`${GEN_URL}${QUERY_PARAMS}`);
    const data = await response.json()
    console.log("data");
    console.log(data);
    return data

}
function HomePageComponent() {
    let [gamesList, setGamesList] = useState([]);
    let [gameTitleSearch, setGameTitleSearch] = useState("");
    let [sortBy, setSortBy] = useState("");
    let sortyByList = [{ label: "--None--", name: "" }, { label: "Release Date", name: "release-date" },
    { label: "Alphabetical", name: "alphabetical" }, {
        label: "Relevance", name: "relevance"
    }];
    let [platform, setPlatform] = useState("");
    const platformList = [{ label: "All", name: "" }, { label: "PC", name: "pc" },
    { label: "Browser", name: "browser" }];
    useEffect(async () => {
        let queryObject = {};
        if (sortBy != "") {
            queryObject['sort-by'] = sortBy;
        }
        if (platform != "") {
            queryObject['platform'] = platform;
        }
        const data = await fetchGames(queryObject);
        setGamesList(data);
    }, [sortBy, platform]);
    
    return (
        <div>
            <div>
                <input type="text" value={gameTitleSearch} onChange={(e) => { setGameTitleSearch(e.target.value) }} />
            </div>
            <div>
                <select
                    onChange={e => { setSortBy(e.target.value) }}
                    className="" >
                    {
                        sortyByList.map((sortObject) => <option value={sortObject.name} key={sortObject.name}>{sortObject.label}</option>)
                    }
                </select >
            </div>
            <div>
                <select
                    onChange={e => { setPlatform(e.target.value) }}
                    className="" >
                    {
                        platformList.map((platformObject) => <option value={platformObject.name} key={platformObject.name}>{platformObject.label}</option>)
                    }
                </select >
            </div>
            <div>
                {gamesList.map((game) => {
                    return renderGame(game,gameTitleSearch)
                })}</div></div>
    )
}


export default HomePageComponent;