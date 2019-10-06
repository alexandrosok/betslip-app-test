import fetchJsonp from 'fetch-jsonp'
import Helper from './helpers/helpers'

export class DataService {

    constructor() {
        this.urlList = {
            betUrl: 'https://www.unibet.com/betting/event/live/',
            resultUrl: 'http://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a'
        }
    }

    placeBetById(eventId) {
        return fetch(`${this.urlList.betUrl}${eventId}`)
            .then((response) => {
                return response
            })
    }

    getData() {
        const cachedFetch = (url, options) => {
            let expiry = null
            if (typeof options === 'number') {
                expiry = options
                options = undefined
            } else if (typeof options === 'object') {
                expiry = options.seconds || expiry
            }
            let cacheKey = 'app-cache-v1'
            let cached = Helper.getCache(cacheKey)
            let whenCached = Helper.getTimeStamp(cacheKey + ':ts')
            if (cached !== null && whenCached !== null) {
                let age = (Date.now() - whenCached) / 1000
                if (age < expiry) {
                    let response = new Response(new Blob([cached]))
                    return Promise.resolve(response)
                } else {
                    Helper.removeCacheByKey(cacheKey)
                    Helper.removeCacheByKey(cacheKey + ':ts')
                }
            }

            return fetchJsonp(url, options).then(response => {
                return response
            })
        }

        return cachedFetch(this.urlList.resultUrl, 2 * 60)
            .then((response) => {
                return response.json()
            })
    }
}