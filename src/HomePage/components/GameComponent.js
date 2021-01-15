import {
    Link
} from "react-router-dom";
import "./HomePage.css";

const URL = "https://api.dev.cloud.barbooksaustralia.com/code-challenge/";


const GameComponent = ({game, gameTitleSearch})=>{

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

export default GameComponent;