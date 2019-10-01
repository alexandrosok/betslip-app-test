import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css'
import AliceCarousel from 'react-alice-carousel'
import CarouselItem from './carousel-item'
import { DataService } from '../services'

export default class CarouselContainer extends React.Component {

  constructor (props) {
    super(props)
    this.carouselItem = null
    this.service = new DataService()
    this.sportTypes = {
      tennis: 'TENNIS',
      football: 'FOOTBALL',
      basketball: 'BASKETBALL'
    }
    this.eventResult = []
    this.state = {
      events: [],
      groups: [],
      filteredEvents: []
    }
  }

  componentDidMount () {
    this.service.getData()
      .then((response) => {
        this.setState({
          events: response.liveEvents,
          groups: response.group.groups
        })
      })
  }

  render () {

    this.eventResult = this.state.events.map((item, index) => (
      <div key={index}>
        {item.event.name}----->{item.event.sport}
      </div>
    ))

    const Gallery = () => (
      <AliceCarousel>
        {this.eventResult}
      </AliceCarousel>
    )

    return (
      <div className="carousel-container">
        <Gallery/>
      </div>
    )
  }
}