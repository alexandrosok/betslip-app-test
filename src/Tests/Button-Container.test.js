import React from 'react';
import {shallow, configure} from 'enzyme';
import ButtonContainer from "../components/Button-Container/button-container";
import Adapter from 'enzyme-adapter-react-16'
import {shallowToJson} from 'enzyme-to-json';

configure({adapter: new Adapter()})

describe('ButtonContainer', () => {
    const wrapper = shallow(<ButtonContainer/>);
    const mockSubmit = jest.fn();

    it('should render correctly', () => {
        const output = shallow(
            <ButtonContainer eventId="mockEventId"/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    test('ButtonContainer component elements render', () => {
        expect(wrapper.find('.place-bet-button')).toHaveLength(1);
    });

    it('should render path element with the expected href attribute', () => {
        const button = wrapper.find('.place-bet-button');
        expect(button.props()).toHaveProperty('href', '#');
    });

    it('it calls the placeBet method', () => {
        wrapper.instance().placeBet = mockSubmit;
        wrapper.instance().placeBet();
        expect(mockSubmit).toHaveBeenCalled();
    });

});
