const PG = require("pg");

function getProductsId (requestFct,resultFc) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM products where id = $1::uuid",
    [requestFct.params.id],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        resultFc.json(result.rows[0]);
      }
    client.end();
    }
  );
}

module.exports = getProductsId;
