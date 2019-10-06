import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css'
import AliceCarousel from 'react-alice-carousel'
import {DataService} from '../../services'
import ScoreContainer from "../Score-Container/score-container";
import NameContainer from "../Name-Container/name-container";
import TimeContainer from "../Time-Container/time-container";
import ButtonContainer from "../Button-Container/button-container";
import Helper from "../../helpers/helpers";

export default class CarouselContainer extends React.Component {

    constructor(props) {
        super(props)
        this.cache = 'app-cache-v1'
        this.service = new DataService()
        this.eventResult = []
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        let whenCached = Helper.getTimeStamp(this.cache + ':ts')
        let age = (Date.now() - whenCached) / 1000

        //checks if 2 minutes have passed then it will initialize a call
        if (age > 2 * 60) {
            console.log('making new call')
            this.service.getData()
                .then((response) => {
                    Helper.setCache(response, this.cache)
                    Helper.setTimeStamp(this.cache + ':ts', Date.now())
                    //when the call is initialized it sets the state ,
                    // next time the page is refreshed it will pull the data from cache
                    this.setState({
                        events: response.liveEvents,
                    })
                })
        } else {
            console.log('getting from cache')
            this.setState({
                events: JSON.parse(Helper.getCache(this.cache)).liveEvents
            })
        }
    }

    /**
     * just to not over-complicate the template
     * @param item
     * @returns {{away: *, home: *}}
     */
    setScore(item) {

        let home = item.liveData.score ? item.liveData.score.home : '?'
        let away = item.liveData.score ? item.liveData.score.away : '?'

        return {
            home,
            away
        }
    }

    render() {
        this.eventResult = this.state.events.map((item, index) => (
            <div key={index}>
                <div className="score-container">
                    <ScoreContainer homeScore={this.setScore(item).home}
                                    awayScore={this.setScore(item).away}/>
                </div>
                <div className="name-container">
                    <NameContainer sport={item.event.sport} name={item.event.name}/>
                </div>
                <div className="time-container">
                    <TimeContainer date={item.event.start} time={item.event.start}/>
                </div>
                <div className="button-container">
                    <ButtonContainer eventId={item.event.id}/>
                </div>
            </div>
        ))

        const Gallery = () => (
            <AliceCarousel
                dotsDisabled={true}
                buttonsDisabled={true}
                autoPlayInterval={3000}
                autoPlay={true}>
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