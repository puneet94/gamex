

import "./styles.css";

import { useSelector } from "react-redux";
import GameComponent from "./GameComponent";


const GamesList = ()=>{

    const title = useSelector(state => state.filters.title)
    const gamesList = useSelector(state=>state.gamesData.games);

    return (
        
        gamesList.length &&
        gamesList.map((game) => <GameComponent key={game.id} game={game} gameTitleSearch={title}/>
        )
    )
}


export default GamesList;