import { useEffect, useState } from "react";
/*

 * This is the file exported to the router
 * Redux hasnt been used because the details are not static
 * It displays two components GameDetails and GameScreenshots which are dependent only on props. This helps in mocking and unit testing
*/

import {

    useLocation, useHistory
} from "react-router-dom";
import GameScreenshots from "./components/games/GameScreenshots";
import GameDetails from "./components/games/GameDetails";
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
    const goBack = ()=>{
        history.goBack();
    }
    return (
        <div>


            <div>
                <GameDetails gameDetails={gameDetails} goBack={goBack}/>
                <GameScreenshots screenshots = {gameDetails.screenshots}/>
            </div>
        </div>
    );
}

export default DetailsPageComponent;