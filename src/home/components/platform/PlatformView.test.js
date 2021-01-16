import React from 'react';
import { shallow ,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { findByTestAtrr, checkProps } from './../../../../Utils';
import PlatformView from './PlatformView';

configure({adapter: new Adapter()});

describe('PlatformView Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = 
            {
                platform: "browser",
                updatePlatform: ()=>{},
                platformList: [{
                    name: "browser",
                    label: "Browser"
                }]
            }
            const propsError = checkProps(PlatformView, expectedProps);
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
                platform: "browser",
                updatePlatform: mockFunc,
                 platformList :[{ label: "All", name: "" }, { label: "PC", name: "pc" },
                { label: "Browser", name: "browser" }]
            }
            wrapper = shallow(<PlatformView {...props} />);
        });

        it('Should Render a select', () => {
            const selectPlatformComponent = findByTestAtrr(wrapper, 'selectPlatformComponent');
            expect(selectPlatformComponent.length).toBe(1);
        });

        it('Should emit callback on change event', () => {
            const selectPlatformComponent = findByTestAtrr(wrapper, 'selectPlatformComponent');
            selectPlatformComponent

            .simulate('change', {target :{ value : 'browser'}})
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
        });
    });    
});