import React from 'react'
import Helper from '../../helpers/helpers'
import './name-container.css'

export default class NameContainer extends React.Component {

    render() {
        const sport = this.props.sport
        const eventName = this.props.name

        return (
            <div className="name-container">
                <div className="icon-container">
                    <img src={Helper.getIcon(sport)} alt=""/>
                </div>
                <div className="game-name">
                    {eventName}
                </div>
            </div>
        )
    }
}