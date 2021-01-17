import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { findByTestAtrr, checkProps } from './../../../../Utils';
import CategoryView from './CategoryView';

configure({ adapter: new Adapter() });

describe('CategoryView Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps =
            {
                selectedCategories: ["war", "shooter"],
                categories: ["war", "strategy", "shooter", "space", "sci-fi"],
                removeCategory: () => { },
                addCategory: () => { }
            }
            const propsError = checkProps(CategoryView, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Renders', () => {
        let wrapper;
        let mockFunc1;
        let mockFunc2;
        beforeEach(() => {
            mockFunc1 = jest.fn();
            mockFunc2 = jest.fn();
            const props =
            {
                selectedCategories: ["war", "shooter"],
                categories: ["war", "strategy", "shooter", "space", "sci-fi"],
                removeCategory: mockFunc1,
                addCategory: mockFunc2
            }
            wrapper = shallow(<CategoryView {...props} />);
        });

        it('Should Render a input box', () => {
            const categorySearchText = findByTestAtrr(wrapper, 'categorySearchText');
            expect(categorySearchText.length).toBe(1);
        });

        
    });
});