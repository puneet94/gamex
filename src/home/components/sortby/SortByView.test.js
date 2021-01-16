import React from 'react';
import { shallow ,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { findByTestAtrr, checkProps } from './../../../../Utils';
import SortByView from './SortByView';

configure({adapter: new Adapter()});

describe('SortByViewComponent Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = 
            {
                sort_by: "release-date",
                sortByChange: ()=>{},
                sortByList: [{
                    name: "alphabetical",
                    label: "Alphabetical"
                }]
            }
            const propsError = checkProps(SortByView, expectedProps);
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
                sort_by: "relevance",
                sortByChange: mockFunc,
                sortByList: [{ label: "--None--", name: "" }, { label: "Release Date", name: "release-date" },
                { label: "Alphabetical", name: "alphabetical" }, {
                    label: "Relevance", name: "relevance"
                }]
            }
            wrapper = shallow(<SortByView {...props} />);
        });

        it('Should Render a select', () => {
            const selectSortByComponent = findByTestAtrr(wrapper, 'selectSortByComponent');
            expect(selectSortByComponent.length).toBe(1);
        });

        it('Should emit callback on change event', () => {
            const selectSortByComponent = findByTestAtrr(wrapper, 'selectSortByComponent');
            selectSortByComponent

            .simulate('change', {target :{ value : 'alphabetical'}})
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });
    });    
});