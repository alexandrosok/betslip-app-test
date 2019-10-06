import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import {shallowToJson} from 'enzyme-to-json';
import CarouselContainer from "../components/Carousel-Container/carousel-container";

configure({adapter: new Adapter()})


describe('CarouselContainer', () => {
    const component = shallow(
        <CarouselContainer/>
    );

    it('should render correctly', () => {
        expect(shallowToJson(component)).toMatchSnapshot();
    });

    it('state should contain', () => {
        expect(component.state()).toEqual({events: []});
    });
});
