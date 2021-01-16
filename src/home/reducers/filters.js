import {
	ADD_CATEGORY, REMOVE_CATEGORY, UPDATE_TITLE, UPDATE_PLATFORM, UPDATE_SORT_BY
} from "../../types";
const INITIAL_STATE = {
	categories: [],
	title: "",
	platform: "",
	sort_by: ""

};

const filters = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_CATEGORY:
			if (state.categories.indexOf(action.payload.category) !== -1) {
				return state
			}
			return {
				...state,
				categories: [...state.categories, action.payload.category]
			}
		case REMOVE_CATEGORY:
			return {
				...state,
				categories: state.categories.filter((category) => action.payload.category !== category)
			}
		case UPDATE_TITLE:
			return {
				...state,
				title: action.payload.title
			}
		case UPDATE_PLATFORM:
			return {
				...state,
				platform: action.payload.platform
			}
		case UPDATE_SORT_BY:
			return {
				...state,
				sort_by: action.payload.sort_by
			}
		default:
			return state;
	}
};
export default filters;