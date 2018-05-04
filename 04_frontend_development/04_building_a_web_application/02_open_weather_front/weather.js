const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const fetch = require("node-fetch");
const apikey = process.env.WEATHER_API_KEY;
const d=new Date()
// const datetomorow = d.setDate(d.getDate() + 1)
const datetomorow = 1525352770;
// (new Date()).getTime()+86400000
// let n = 0;
// console.log(datetomorow);

app.get("/:city", function(requestFct, resultFct){
  // console.log(`http://api.openweathermap.org/data/2.5/forecast?q=${requestFct.params.city}&units=metric&APPID=${apikey}`);
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${requestFct.params.city}&units=metric&APPID=${apikey}`)
    .then((response) => response.json())
    // .then((result) => result.list[0].weather[0].main)
    // .then((result) => resultFct.send(`${result}`))
    .then((result) => {
      for (let i=0; i<result.list.length; i++) {
        console.log(i);
        console.log("length : ",result.list.length);
        console.log(datetomorow);
        console.log(result.list[i]);
        if (result.list[i].dt < datetomorow) {
        } else {
          console.log(result.list[i].weather[0].main);
          resultFct.send(result.list[i].weather[0].main)
          break;
          console.log(result.list[i].list.dt);
          // resultFct.send(src=`http://api.openweathermap.org/data/img/w/${result.list[i].weather[0].icon}.png`);
          // return
        }
      }
    })
    .catch((error) => {console.warn("Fucking error : ", error)})
});




app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
// weatherByCityName("Milano");
// module.exports = weatherByCityName


///Correction
// const fetch = require ("node-fetch");
//
// function weather(){
//   return fetch ("http://api.openweathermap.org/data/2.5/weather?q=Lille&units=metric&appid=f431a235023298295e0b141417f40a58")
//     .then ((response) => response.json())
//   }
// module.exports={
//   weather:weather
// };
