import React from 'react'
import Helper from '../../helpers/helpers'
import './time-container.css'

export default class TimeContainer extends React.Component {
    render() {

        const date = Helper.isToday(this.props.date)
        const time = Helper.parseDate(this.props.time).time

        return (
            <div className="time-container">
                {date}, {time}
            </div>
        )
    }
}