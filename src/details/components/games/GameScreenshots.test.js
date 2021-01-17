import React from 'react';
import { shallow ,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { findByTestAtrr, checkProps } from '../../../../Utils';
import GameScreenshots from './GameScreenshots';

configure({adapter: new Adapter()});

describe('GameScreenshots Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = 
            {
                sort_by: "release-date",
                updateSortBy: ()=>{},
                sortByList: [{
                    name: "alphabetical",
                    label: "Alphabetical"
                }]
            }
            const propsError = checkProps(GameScreenshots, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

     
});