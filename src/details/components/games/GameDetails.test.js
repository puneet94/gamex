import React from 'react';
import { shallow ,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { findByTestAtrr, checkProps } from '../../../../Utils';
import GameDetails from './GameDetails';

configure({adapter: new Adapter()});

describe('GameDetails Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = 
            {
                goBack: ()=>{},
                gameDetails: {
                    thumbnail: "img.png",
                    minimumSystemRequirements: {
                        os: "windows",
                        processor: "intel",
                        memory: "265gb",
                        graphics: "2gb",
                    }
                }
            }
            const propsError = checkProps(GameDetails, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Renders', () => {
        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = 
            {
                goBack: mockFunc,
                "gameDetails": {
                    "thumbnail": "img.png",
                    "title": "game title"
                }
            }
            wrapper = shallow(<GameDetails {...props} />);
        });

        it('Should Render an image', () => {
            const gameDetailsthumbnail = findByTestAtrr(wrapper, 'gameDetailsthumbnail');
            expect(gameDetailsthumbnail.length).toBe(1);
        });
        it('Should emit callback on button event', () => {
            const backbutton = findByTestAtrr(wrapper, 'backbutton');
            backbutton

            .simulate('click')
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });
    });    
});