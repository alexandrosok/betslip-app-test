import fetchJsonp from 'fetch-jsonp'

export class DataService {

  constructor () {
    this.url = {
      resultUrl: 'http://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a'
    }
  }

  getData () {
    return fetchJsonp('http://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a')
      .then((response) => {
        return response.json()
      })
      // .then((jsonData) => {
      //   //return JSON.stringify(jsonData)
      // })
      // .then((jsonStr) => {
      //   return jsonStr
      // })
  }
}