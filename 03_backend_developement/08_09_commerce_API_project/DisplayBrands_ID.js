const PG = require("pg");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/brands/:id", function (request, result) {
  select(request.params.id, result);
});

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});


function select (id, resultToReturn) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM brands where id = $1::uuid",
    [id],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        resultToReturn.json(result.rows[0]);
      }
    client.end();
    }
  );
}
