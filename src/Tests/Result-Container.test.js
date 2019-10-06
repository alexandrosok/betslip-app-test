import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import {shallowToJson} from 'enzyme-to-json';
import ResultContainer from "../components/Result-Container/result-container";
configure({adapter: new Adapter()})

describe('ResultContainer', () => {
    const component = shallow(<ResultContainer sport="mockSport" eventName="mockEventName"/>);

    it('should render correctly', () => {
        expect(shallowToJson(component)).toMatchSnapshot();
    });
});

describe('ResultContainer containers', () => {
    const component = shallow(<ResultContainer />);

    it('should have a div with class div.result-container', () => {
        expect(component.find('div.result-container').length).toEqual(1)
    })
});

