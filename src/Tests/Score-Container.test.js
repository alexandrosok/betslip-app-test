import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import {shallowToJson} from 'enzyme-to-json';
import ScoreContainer from "../components/Score-Container/score-container";
configure({adapter: new Adapter()})

describe('ScoreContainer', () => {
    const component = shallow(<ScoreContainer homeScore="mockSport" awayScore="mockEventName"/>);

    it('should render correctly', () => {
        expect(shallowToJson(component)).toMatchSnapshot();
    });
});

describe('ScoreContainer containers', () => {
    const component = shallow(<ScoreContainer homeScore="mockSport" awayScore="mockEventName"/>);

    it('should have a div with class div.score-container', () => {
        expect(component.find('div.score-container').length).toEqual(1)
    })
});

