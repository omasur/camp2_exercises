const request = require("request");
const apikey = process.env.WEATHER_API_KEY;

function weatherByLatitudeAndLongitude (lat,lon) {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apikey}`;
  // console.log(url);
  request (
    {
      url: url,
      method: "GET"
    },
    function(error,response,result) {
      return console.log(JSON.parse(result).main.temp + "°C");
    }
  );
}

function weatherByZipcode (postcode,cc) {
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=${postcode},${cc}&units=metric&APPID=${apikey}`;
  // console.log(url);
  request (
    {
      url: url,
      method: "GET"
    },
    function(error,response,result) {
      return console.log(JSON.parse(result).main.temp + "°C");
    }
  );
}

// weatherByLatitudeAndLongitude(32.661343, 51.680374);
// weatherByZipcode("59000", "fr");

module.exports = {weatherByLatitudeAndLongitude, weatherByZipcode};
