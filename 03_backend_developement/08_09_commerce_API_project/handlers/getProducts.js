const PG = require("pg");

function getProducts (requestFct,resultFc) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM products",
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        resultFc.json(result.rows);
      }
    client.end();
    }
  );
}

module.exports = getProducts;
