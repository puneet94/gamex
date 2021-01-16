import { ADD_CATEGORY, REMOVE_CATEGORY, UPDATE_PLATFORM, UPDATE_SORT_BY} from "../../types";

import {fetchGames} from "./gamesData";

export const updateSortBy = (sort_by)=>{
    return async (dispatch)=>{
        dispatch({type:UPDATE_SORT_BY,payload:{sort_by}});
        dispatch(fetchGames());
    };
};

export const updatePlatform = (platform)=>{
    return async (dispatch)=>{
        dispatch({type:UPDATE_PLATFORM,payload:{platform}});
        dispatch(fetchGames())
    };
};
export const addCategory = (category)=>{
    return async (dispatch)=>{
        dispatch({type:ADD_CATEGORY,payload:{category}});
        dispatch(fetchGames());
    };
};

export const removeCategory = (category)=>{
    return async (dispatch)=>{
        dispatch({type:REMOVE_CATEGORY,payload:{category}});
        dispatch(fetchGames());
    };
};
