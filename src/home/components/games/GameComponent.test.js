import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { findByTestAtrr, checkProps } from './../../../../Utils';
import GameComponent from './GameComponent';

configure({ adapter: new Adapter() });

describe('Game Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps =
            {
                gameTitleSearch: "war",

                game: {
                    platform: "browser",
                    publisher: "espan",
                    genre: "strategy",
                    id: 1,
                    shortDescription: "description of the game",
                    thumbnail: "/image/img.png",
                    title: "Game title"
                }
            }
            const propsError = checkProps(GameComponent, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Renders', () => {
        let wrapper;

        beforeEach(() => {

            const props =
            {
                gameTitleSearch: "war",

                game: {
                    platform: "browser",
                    publisher: "espan",
                    genre: "strategy",
                    id: 1,
                    shortDescription: "description of the game",
                    thumbnail: "/image/img.png",
                    title: "Game title war"
                }
            }
            wrapper = shallow(<GameComponent {...props} />);
        });

        it('Should Render an image', () => {
            const gameImageTag = findByTestAtrr(wrapper, 'gameImageTag');
            expect(gameImageTag.length).toBe(1);
        });

        it('Should render a link', () => {
            const gameLink = findByTestAtrr(wrapper, 'gameLink');

            expect(gameLink.length).toBe(1);
        });
    });
});