import axios from 'axios'

const URL = "/code-challenge/api/";

const encodeQueryString = (params) => {
    const keys = Object.keys(params)
    return keys.length
        ? "?" + keys
            .map(key => encodeURIComponent(key)
                + "=" + encodeURIComponent(params[key]))
            .join("&")
        : ""
}
export const fetchGamesAPI =  ({ sort_by, categories, platform }) => {

    const queryObject = {};
    if (platform !== "") {
        queryObject['platform'] = platform;
    }
    if (categories && categories.length) {
        if (categories.length === 1) {
            queryObject['category'] = categories[0]
        } else {
            queryObject['tag'] = categories.join(".")
        }
    }
    if (sort_by !== "") {
        queryObject['sort-by'] = sort_by;
    }


    let GEN_URL = `${URL}games`;
    if (queryObject.tag) {
        GEN_URL = `${URL}filter`;
    }
    const QUERY_PARAMS = encodeQueryString(queryObject);
    console.log(`${GEN_URL}${QUERY_PARAMS}`);

    return axios.get(`${GEN_URL}${QUERY_PARAMS}`);
    


}

export const fetchCategoriesAPI =  () => {
    let CATEGORIES_URL = `${URL}categories`;
    return axios.get(CATEGORIES_URL);

    
}