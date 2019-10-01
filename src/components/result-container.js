import React from 'react'
import { DataService } from '../services'
import 'react-alice-carousel/lib/alice-carousel.css'
import AliceCarousel from 'react-alice-carousel'
import CarouselContainer from './carousel-container'

export default class ResultContainer extends React.Component {

  constructor (props) {
    super(props)
    this.events = null
    this.groups = null
    this.results = null
  }

  componentDidMount () {

  }

  render () {
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