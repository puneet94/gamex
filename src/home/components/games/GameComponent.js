import {
    Link
} from "react-router-dom";
import "./styles.css";

const URL = "https://api.dev.cloud.barbooksaustralia.com/code-challenge/";


const GameComponent = ({game, gameTitleSearch})=>{

    return (
        game.title.toLowerCase().includes(gameTitleSearch.toLowerCase()) ? <div className="gameBox" key={game.id}>
            <div className="gameTitle">
                <h3>{game.title}</h3>
            </div>
            <div className="gameDetails">
                <div className="gameImage">
                    <img className="gameImageTag" alt="someimage" src={`${URL}${game.thumbnail}`} />
                </div>
                <div className="gameDescription">
                    <div>
                        <div className="gameDescriptionText">
                        {game.shortDescription}
                        </div>
                        <div className="gameAttributes">
                        <ul>
                            <li>{game.platform}</li>
                            <li>{game.publisher}</li>
                            <li>{game.genre}</li>
                        </ul>
                        </div>
                        
                    </div>
                    <Link to={"/details?id=" + game.id}>{"View More"}</Link>
                </div>
                
            </div>
        </div> : null)

    
}

export default GameComponent;