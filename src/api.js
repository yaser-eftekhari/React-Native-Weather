var _ = require('lodash');

var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=d3ff3ecf59ef3094fb9fd99a21cf885b'

module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

  return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return {
        city: json.name,
        temperature: Math.round(json.main.temp - 273.15) + ' ˚C',
        description: _.capitalize(json.weather[0].description)
      };
    });
}
