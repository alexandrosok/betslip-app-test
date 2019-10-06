import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css'
import CarouselContainer from '../Carousel-Container/carousel-container'
import './result-container.css'

export default class ResultContainer extends React.Component {

    render() {
        return (
            <div className="result-container">
                <div>
                </div>
                <div>
                    <CarouselContainer/>
                </div>
            </div>
        )
    }
}