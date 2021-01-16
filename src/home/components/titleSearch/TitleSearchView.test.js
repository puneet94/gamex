import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { findByTestAtrr, checkProps } from './../../../../Utils';
import TitleSearchView from './TitleSearchView';

configure({ adapter: new Adapter() });

describe('TitleSearchView Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps =
            {
                title: "War",
                titleUpdate: () => { }
            }
            const propsError = checkProps(TitleSearchView, expectedProps);
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
                title: "War",
                titleUpdate: mockFunc,

            }
            wrapper = shallow(<TitleSearchView {...props} />);
        });

        it('Should Render a input', () => {
            const titleSearchComponent = findByTestAtrr(wrapper, 'titleSearchComponent');
            expect(titleSearchComponent.length).toBe(1);
        });

        it('Should emit callback on change event', () => {
            const titleSearchComponent = findByTestAtrr(wrapper, 'titleSearchComponent');
            titleSearchComponent

                .simulate('change', { target: { value: 'War' } })
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });
    });
});