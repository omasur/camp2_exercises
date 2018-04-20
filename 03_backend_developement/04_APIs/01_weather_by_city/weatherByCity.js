const request = require("request");
const apikey = process.env.WEATHER_API_KEY;

console.log(apikey);

function weatherByCityName (city) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apikey}`;
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
//weatherByCityName("Bogota");

module.exports = weatherByCityName;
