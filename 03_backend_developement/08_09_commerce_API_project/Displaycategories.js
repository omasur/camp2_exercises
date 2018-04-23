const PG = require("pg");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/categories", function (request, result) {
  select(result);
});

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

function select (resultToReturn) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM categories",
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        resultToReturn.send(result.rows);
      }
    client.end();
    }
  );
}
