import {
    GET_CATEGORY, GET_GAMES
} from "../../types";
import gamesData from './gamesData';

describe('Games Reducer', () => {
    it('Should return default state', () => {
        const newState = gamesData(undefined, {});
        expect(newState).toEqual({
            categories: [],
            games: []
        });
    });

    it('Should return new state if receiving title', () => {

        const categories = ["war", "fantasy","sci-fi"];
        const newState = gamesData(undefined, {
            type: GET_CATEGORY,
            payload: {
                categories
            }
        });
        expect(newState.categories).toEqual(categories);
    });

    it('Should return new state if receiving games', () => {

        const games = [
            {
                "id": 498,
                "title": "Blankos Block Party",
                "thumbnail": "/g/498/thumbnail.jpg",
                "shortDescription": "What happens when you take the vinyl collectible toy experience and combine it with an open-world multiplayer game? You get Blankos Block Party!\r\n",
                "genre": "MMO",
                "platform": "PC (Windows)",
                "publisher": "Third Kind Games",
                "developer": "Mythical Games Inc",
                "releaseDate": "2020-12-11"
            },
            {
                "id": 83,
                "title": "Heavy Metal Machines",
                "thumbnail": "/g/83/thumbnail.jpg",
                "shortDescription": "A free-to-play multiplayer vehicular combat game based in a post-apocalyptic world.",
                "genre": "MOBA",
                "platform": "PC (Windows)",
                "publisher": "Hoplon",
                "developer": "Hoplon",
                "releaseDate": "2017-01-31"
            }
        ];
        const newState = gamesData(undefined, {
            type: GET_GAMES,
            payload: {
                games
            }
        });
        expect(newState.games).toEqual(games);

    });
    

});