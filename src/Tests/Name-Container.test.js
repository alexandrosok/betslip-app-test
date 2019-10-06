import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import {shallowToJson} from 'enzyme-to-json';
import NameContainer from "../components/Name-Container/name-container";
configure({adapter: new Adapter()})

describe('NameContainer', () => {
    const component = shallow(<NameContainer sport="mockSport" eventName="mockEventName"/>);

    it('should render correctly', () => {
        expect(shallowToJson(component)).toMatchSnapshot();
    });
});

describe('NameContainer containers', () => {
    const component = shallow(<NameContainer sport="mockSport" eventName="mockEventName"/>);

    it('should have an image tag with src', () => {
        const container = component.find('.icon-container > img');
        expect(container.props()).toHaveProperty('src', '');
    });

    it('should have a div with class div.game-name', () => {
        expect(component.find('div.game-name').length).toEqual(1)
    })

    it('should have a div with class iv.icon-container', () => {
        expect(component.find('div.icon-container').length).toEqual(1)
    })

    it('should have a div with class div.name-container', () => {
        expect(component.find('div.name-container').length).toEqual(1)
    })
});

