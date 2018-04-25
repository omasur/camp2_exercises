const PG = require("pg");

function getCategoryId (requestFct,resultFc) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM categories where id = $1::uuid",
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

module.exports = getCategoryId;
