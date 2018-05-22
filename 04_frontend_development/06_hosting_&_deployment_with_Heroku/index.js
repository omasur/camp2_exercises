const getHome = require("./handlers/getHome");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", getHome);

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
