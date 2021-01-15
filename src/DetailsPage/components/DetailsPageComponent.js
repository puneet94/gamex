import { useEffect, useState } from "react";
import {

    useLocation, useHistory
} from "react-router-dom";

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
                setGameDetails(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [location]);

    return (
        <div>
            {"Details Page"}



            <div>
                <div className="gameDetails">
                    <div className="gameImage">
                        {gameDetails.thumbnail &&<img src={`code-challenge${gameDetails.thumbnail}`} alt=""/>}
                    </div>
                    <div className="gameContents">
                        <div>


                            <div className="gameRequirements">

                            </div>
                            <div className="gameDescription">
								{gameDetails.title}
                                {gameDetails.shortDescription}
                                {gameDetails.description}
                                
                            </div>
                        </div>
                        <button onClick={() => history.goBack()}>Back</button>
                    </div>
                </div>
                <div className="gameScreenshots" style={{display:"flex",width:"100%"}}>
                    {gameDetails.screenshots && gameDetails.screenshots.map((screenshot)=>{
                        return (
                                <div key={screenshot.id} >
                                    <img src={`code-challenge${screenshot.image}`} alt=""/>
                                </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default DetailsPageComponent;