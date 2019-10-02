import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css'
import AliceCarousel from 'react-alice-carousel'
import CarouselItem from './carousel-item'
import { DataService } from '../services'
import footballIcon from '../images/icons/football.png'
import tennisIcon from '../images/icons/tennis.png'
import basketIcon from '../images/icons/basketball.png'
import defaultIcon from '../images/icons/default.png'

export default class CarouselContainer extends React.Component {

  constructor (props) {
    super(props)
    this.carouselItem = null
    this.service = new DataService()
    this.eventResult = []
    this.sportTypes = {
      tennis: 'TENNIS',
      football: 'FOOTBALL',
      basket: 'BASKETBALL',
    }
    this.state = {
      events: [],
      groups: [],
      filteredEvents: []
    }
  }

  componentDidMount () {
    this.service.getData()
      .then((response) => {
        console.log(response)
        this.setState({
          events: response.liveEvents,
          groups: response.group.groups
        })
      })
  }

  /**
   * checks if the date is today
   * @param date
   * @returns {string}
   */
  isToday (date) {
    return new Date().toDateString() === new Date(this.parseDate(date).date).toDateString() ? 'Today' : this.parseDate(date).date
  }

  /**
   * splits the date response string into time / date
   * @param date
   * @returns {{date: *, time: *}}
   */
  parseDate (date) {
    return {
      date: new Date(date).toISOString().split('T')[0],
      time: date.split('Z')[0].split('T')[1]
    }
  }

  /**
   * passed the event id to the service layer
   * @param eventId
   */
  placeBet (eventId) {
    this.service.placeBetById(eventId)
      .then((response) => {
        console.log(response)
      })
  }

  /**
   * returns an icon according to the sport
   * @param type
   */
  getIcon (type) {
    switch (type) {
      case this.sportTypes.tennis :
        return tennisIcon
      case this.sportTypes.basket:
        return basketIcon
      case this.sportTypes.football:
        return footballIcon
      default:
        return defaultIcon
    }
  }

  render () {
    this.eventResult = this.state.events.map((item, index) => (
      <div key={index}>
        <div className="score-container">
          {item.liveData.score.home} - {item.liveData.score.away}
        </div>
        <div className="name-container">
          <img src={this.getIcon(item.event.sport)} alt=""/>
          <div>
            {item.event.name}
          </div>
        </div>
        <div className="time-container">
          {this.isToday(item.event.start)}, {this.parseDate(item.event.start).time}
        </div>
        <div className="button-container">
          <button onClick={this.placeBet.bind(this, item.event.id)}>Place A Bet</button>
        </div>
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