const PG = require("pg");

function getBrandsId (requestFct,resultFct) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM brands where id = $1::uuid",
    [requestFct.params.id],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        resultFct.json(result.rows[0]);
      }
    client.end();
    }
  );
}

module.exports = getBrandsId;
