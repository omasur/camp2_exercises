const PG = require("pg");

function getCategory (requestFct,resultFct) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM categories",
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        resultFct.send(result.rows);
      }
    client.end();
    }
  );
}

module.exports = getCategory;
