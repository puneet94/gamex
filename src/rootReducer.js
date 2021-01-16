import {combineReducers} from "redux";
import filters from "./home/reducers/filters";
import gamesData from "./home/reducers/gamesData";
export default combineReducers({
    filters,
    gamesData
});