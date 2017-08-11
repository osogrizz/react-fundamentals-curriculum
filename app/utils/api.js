let axios = require('axios')

let _APIKEY = 'ea6f972185856f6139efb699b08a38f7'

getWeather (location) {
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&type=accurate${_APIKEY}`)
    .then((response) => response.data)
    .catch(handleError)
}

getForecast (location) {
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&type=accurate${_APIKEY}&cnt=5`)
    .then((response) => response.data)
    .catch(handleError)
}

handleError (error) {
  console.warn(error)
  return null
}

module.exports = {
  getWeather: getWeather,
  getForecast: getForecast,
}

//
// var _baseURL = 'http://api.openweathermap.org/data/2.5/';
// var _APIKEY = 'e7534f6db247d8a048c103c444d05c29';
//
// prepRouteParams (queryStringData) {
//   return Object.keys(queryStringData)
//     .map(function (key) {
//       return key + '=' + encodeURIComponent(queryStringData[key]);
//     }).join('&')
// }
//
// prepUrl (type, queryStringData) {
//   return _baseURL + type + '?' + prepRouteParams(queryStringData);
// }
//
// getQueryStringData (location) {
//   return {
//     q: location,
//     type: 'accurate',
//     APPID: _APIKEY,
//     cnt: 5
//   }
// }
//
// getCurrentWeather (location) {
//   var queryStringData = getQueryStringData(location);
//   var url = prepUrl('weather', queryStringData)
//
//   return axios.get(url)
//     .then(function (currentWeatherData) {
//       return currentWeatherData.data
//     })
// }
//
// getForcast (location) {
//   var queryStringData = getQueryStringData(location);
//   var url = prepUrl('forecast/daily', queryStringData)
//
//   return axios.get(url)
//     .then(function (forecastData) {
//       return forecastData.data
//     })
// }
// module.exports = {
//   getCurrentWeather: getCurrentWeather,
//   getForecast: getForcast
// }
//
// }
