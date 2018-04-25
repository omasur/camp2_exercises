const fetch = require("node-fetch");
const apikey = process.env.WEATHER_API_KEY;

function weatherByCityName (city) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apikey}`)
    .then((response) => response.json())
    .then((result) => console.log("City ", city, " : " , result.main.temp, "°C"))
    .catch((error) => {console.warn("Fucking error : ", error)})
}

function weatherByLatitudeAndLongitude (lat,lon) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apikey}`)
    .then((response) => response.json())
    .then((result) => console.log("For latitude ", lat , " Longitude ", lon, " : ", result.main.temp , "°C"))
    .catch((error) => {console.warn("Fucking error : ", error)})
}

weatherByCityName("Milano");
weatherByLatitudeAndLongitude(32.661343, 51.680374);
