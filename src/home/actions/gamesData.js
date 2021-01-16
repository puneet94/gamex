import { fetchCategoriesAPI,fetchGamesAPI } from '../../apis/gamesData';
import { GET_CATEGORY, GET_GAMES } from '../../types';


export const fetchGames = () => {
    console.log("Called fetch games actions");
    return async (dispatch, getState) => {
        
        try {
            const response = await fetchGamesAPI(getState().filters);
            const data  = response.data;
            console.log("the data is here");
            console.log(data);
            if ('status' in data) {

                dispatch({ type: GET_GAMES, payload: { games: [] } })
            } else {
                dispatch({ type: GET_GAMES, payload: { games: data } })
            }
        }
        catch (error) {
            console.log(error);
            dispatch({ type: GET_GAMES, payload: { games: [] } })
        }

    }
}
export const fetchCategories = () => {
    return async dispatch => {
        try {
            
            const response = await fetchCategoriesAPI();
            const data = response.data
            dispatch({ type: GET_CATEGORY, payload: { categories: data } }) //store first five posts
        }
        catch (e) {
            console.log(e)
            dispatch({ type: GET_CATEGORY, payload: { categories: [] } })
        }
    }
}