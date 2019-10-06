import React from 'react'
import './button-container.css'

export default class ButtonContainer extends React.Component {

    /**
     * passed the event id to the service layer
     * @param eventId
     */
    placeBet(eventId) {
        //this was made like this to represent an event handler in case an api call
        // would be made to place a bet
        // eg. replacing the line bellow with DataService.placeBet(eventId)
        window.open(`https://www.unibet.com/betting/event/live/${eventId}`, '_blank');
    }

    render() {

        const eventId = this.props.eventId

        return (
            <div className="bet-button-container">
                <a className="place-bet-button" onClick={this.placeBet.bind(this, eventId)} href="#"><span>Place A Bet</span></a>
            </div>
        )
    }
}