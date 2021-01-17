import { useEffect, useState } from "react";
import {

    useLocation, useHistory
} from "react-router-dom";
import "./styles.css"
const DetailsPageComponent = () => {
    let history = useHistory()

    const [gameDetails, setGameDetails] = useState({});
    const location = useLocation();
    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const fetchData = async () => {
            try {
                const response = await fetch(`code-challenge/api/game?id=${query.get("id")}`);
                const data = await response.json();
                console.log(data);
                setGameDetails(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [location]);

    return (
        <div>


            <div>
                <div className="gamePageDetails">
                    <div className="gamePageImage">
                        {gameDetails.thumbnail && <img src={`code-challenge${gameDetails.thumbnail}`} alt="" />}
                    </div>
                    <div className="gamePageContents">
                        <div className="gamePageAttributes">
                            <div className="gamePageRequirements">
                                <h4>Requirements</h4>
                                {gameDetails.minimumSystemRequirements ?
                                    <div> <div className="gameTags">OS</div>
                                        <div className="gameTagsDetails">{gameDetails.minimumSystemRequirements.os}</div>
                                        <div className="gameTags">Processor</div>
                                        <div className="gameTagsDetails">{gameDetails.minimumSystemRequirements.processor}</div>
                                        <div className="gameTags">Memory</div>
                                        <div className="gameTagsDetails">{gameDetails.minimumSystemRequirements.memory}</div>
                                        <div className="gameTags">Graphics</div>
                                        <div className="gameTagsDetails">{gameDetails.minimumSystemRequirements.graphics}</div>
                                        <div className="gameTags">Storage</div>
                                        <div className="gameTagsDetails">{gameDetails.minimumSystemRequirements.storage}</div>

                                    </div> : null
                                }

                            </div>
                            <div className="gamePageDescription">
                                <h4>{gameDetails.title}</h4>
                                {gameDetails.shortDescription}


                            </div>
                        </div>
                        <button onClick={() => history.goBack()}>Back</button>
                    </div>
                </div>
                <div className="gamePageScreenshots" >
                    {gameDetails.screenshots && gameDetails.screenshots.map((screenshot) => {
                        return (
                            <div key={screenshot.id} className="gamePageScreenshotContainer">
                                <img src={`code-challenge${screenshot.image}`} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default DetailsPageComponent;