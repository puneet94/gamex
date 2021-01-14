import { useEffect, useState } from "react";
import {
    
    useLocation,useHistory
  } from "react-router-dom";
const URL = "https://api.dev.cloud.barbooksaustralia.com/code-challenge/";
function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
const DetailsPageComponent = () => {
    let history = useHistory()

    let query = useQuery();
    const [gameDetails, setGameDetails] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            query.get("id")
            const response = await fetch(`${URL}/game?id=${query.get("id")}`);
            const data = await response.json();
            console.log(data);
        }
        fetchData();
    }, []);
    
    return (
        <div>
            {"Details Page"}
            <button onClick={()=>history.goBack()}>Back</button>
        </div>
    );
}

export default DetailsPageComponent;