import footballIcon from '../images/icons/football.png'
import tennisIcon from '../images/icons/tennis.png'
import basketIcon from '../images/icons/basketball.png'
import defaultIcon from '../images/icons/default.png'
import {sportTypes} from '../static-data/sport-types';

export default class Helper {

    constructor(props) {

    }

    /**
     * removes localstorage item by key
     * @param key
     */
    static removeCacheByKey(key){
        localStorage.removeItem(key)
    }

    /**
     * returns the localstorage items
     * @returns {string}
     */
    static getCache(key) {
        return localStorage.getItem(key)
    }

    /**
     * returns the timestamp that is stored in the localstorage
     * @returns {string}
     */
    static getTimeStamp(key) {
        return localStorage.getItem(key)
    }

    static setTimeStamp(key , value) {
        localStorage.setItem(key, value)
    }

    /**
     * checks the stored timestamp with the current timestamp
     * to determine if 2 minutes have passed
     * @returns {boolean}
     */
    static hasTimePassed() {
        return Math.floor((new Date().getTime() - this.getTimeStamp()) / 60000) > 2
    }

    /**
     * stores the api response in localstorage
     * with an additional timestamp for the time checking
     * @param response
     */
    static setCache(response , key) {
        localStorage.setItem(key, JSON.stringify(response))
    }

    /**
     * splits the date response string into time / date
     * @param date
     * @returns {{date: *, time: *}}
     */
    static parseDate(date) {
        return {
            date: new Date(date).toISOString().split('T')[0],
            time: date.split('Z')[0].split('T')[1]
        }
    }

    /**
     * returns an icon according to the sport
     * @param type
     */
    static getIcon(type) {
        switch (type) {
            case sportTypes.tennis :
                return tennisIcon
            case sportTypes.basket:
                return basketIcon
            case sportTypes.football:
                return footballIcon
            default:
                return defaultIcon
        }
    }

    /**
     * checks if the date is today
     * @param date
     * @returns {string}
     */
    static isToday(date) {
        return new Date().toDateString() === new Date(this.parseDate(date).date).toDateString() ? 'Today' : this.parseDate(date).date
    }
}