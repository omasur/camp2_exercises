const express = require ('express');
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;
const weather = require ("./weather.js")

app.get("/",function(request,res){
  weather.weather()
  .then((weatherObject) => {
    fs.readFile("meteo.html", "utf8", (error, html) => {
      res.send(
        html
          .replace("{{temperature}}", weatherObject.main.temp)
          .replace("{{icon}}", weatherObject.weather[0].icon)
      );
    });
  })
});

app.listen(port,function(){
  console.log("server listening on the port"+ port);
});
