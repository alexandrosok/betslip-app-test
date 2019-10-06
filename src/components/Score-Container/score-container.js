import React from 'react'
import './score-container.css'

export default class ScoreContainer extends React.Component {
    render() {

        const homeScore = this.props.homeScore
        const awayScore = this.props.awayScore

        return (
            <div className="score-container">
                {homeScore} - {awayScore}
            </div>
        )
    }
}