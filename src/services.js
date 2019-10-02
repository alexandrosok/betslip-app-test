import fetchJsonp from 'fetch-jsonp'

export class DataService {

  constructor () {
    this.urlList = {
      betUrl: 'https://www.unibet.com/betting/event/live/',
      resultUrl: 'http://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a'
    }
  }

  placeBetById (eventId) {
    return fetch(`${this.urlList.betUrl}${eventId}`)
      .then((response) => {
        return response
      })
  }

  getData () {
    return fetchJsonp(this.urlList.resultUrl)
      .then((response) => {
        return response.json()
      })
  }
}