const PG = require("pg");

function getBrands (requestFct,resultFct) {
  // console.log("requestFct = ", requestFct);
  // console.log("resultFct = ", resultFct);
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM brands",
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        resultFct.json(result.rows);
      }
    client.end();
    }
  );
}

module.exports = getBrands
