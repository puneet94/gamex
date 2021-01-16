import {
	GET_CATEGORY,GET_GAMES
} from "../../types";
const INITIAL_STATE = {
	categories: [],
	games: []
};

const gamesData = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_CATEGORY:
			return {
				...state,
				categories: action.payload.categories
			}
		case GET_GAMES:
			return {
				...state,
				games: action.payload.games
			}
		
		default:
			return state;
	}
};
export default gamesData;