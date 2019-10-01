import React from 'react'
import { DataService } from '../services'

export default class BetButton extends React.Component {

  constructor (props) {
    super(props)
    this.service = new DataService()
    this.state = {}
  }

  componentDidMount () {
  }

  render () {
    return (
      <input type="button" value="Place Bet"/>
    )
  }
}