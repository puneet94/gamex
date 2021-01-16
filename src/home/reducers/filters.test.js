import { UPDATE_PLATFORM,UPDATE_TITLE,UPDATE_SORT_BY,ADD_CATEGORY,REMOVE_CATEGORY } from '../../types';
import filtersReducer from './filters';

describe('Filters Reducer', () => {
    it('Should return default state', () => {
        const newState = filtersReducer(undefined, {});
        expect(newState).toEqual({
            categories: [],
            title: "",
            platform: "",
            sort_by: ""
        });
    });

    it('Should return new state if receiving title', () => {

        const title = "game title";
        const newState = filtersReducer(undefined, {
            type: UPDATE_TITLE,
            payload: {
                title
            }
        });
        expect(newState.title).toEqual(title);
    });

    it('Should return new state if receiving sortby', () => {

        const sort_by = "relevance";
        const newState = filtersReducer(undefined, {
            type: UPDATE_SORT_BY,
            payload: {
                sort_by
            }
        });
        expect(newState.sort_by).toEqual(sort_by);

    });
    it('Should return new state if receiving platform', () => {

        const platform = "browser";
        const newState = filtersReducer(undefined, {
            type: UPDATE_PLATFORM,
            payload: {
                platform
            }
        });
        expect(newState.platform).toEqual(platform);

    });

    it('Should return new state if adding category', () => {

        const category = "sports";
        const newState = filtersReducer({
            categories: ["3d","mmorpg","fantasy"],
            title: "",
            platform: "",
            sort_by: ""
        }, {
            type: ADD_CATEGORY,
            payload: {
                category
            }
        });
        expect(newState.categories).toEqual(["3d","mmorpg","fantasy","sports"]);
    });

    it('Should return new state if removing category', () => {

        const category = "fantasy";
        const newState = filtersReducer({
            categories: ["3d","mmorpg","fantasy"],
            title: "",
            platform: "",
            sort_by: ""
        }, {
            type: REMOVE_CATEGORY,
            payload: {
                category
            }
        });
        expect(newState.categories).toEqual(["3d","mmorpg"]);
    });
    
});