let axios = require('axios')

let url = 'api.openweathermap.org/data/2.5/'
let _APIKEY = 'e7534f6db247d8a048c103c444d05c29'

prepRouteParams(queryStringData) {
  return Object.keys(queryStringData).map(function(key) {
    return key + '=' + encodeURIComponent(queryStringData[key])
  }).join('&')
}

prepUrl(type, queryStringData) {
  return url + type + '?' + prepRouteParams(queryStringData)
}

getQueryStringData(location) {
  return {
    q: location,
    type: 'accurate',
    APPID: _APIKEY,
    cnt: 5
  }
}

getCurrentWeather(location) {
  let queryStringData = getQueryStringData(location)
  let url = prepUrl('weather', queryStringData)

  return axios.get(url)
    .then(function (currentWeatherData) {
      return forecastData.data
    })
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
}

}
