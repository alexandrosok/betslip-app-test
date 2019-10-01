import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css'
import AliceCarousel from 'react-alice-carousel'

export default class CarouselItem extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
    this.item = null
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="carousel-item">
        {this.item}
      </div>
    )
  }
}