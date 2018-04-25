const PG = require("pg");

function getCatIdProducts (requestFct,resultFct) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "select p1.* from product_categories p0 left outer join products p1 on p1.id=p0.id where p0.category_id=$1::uuid",
    [requestFct.params.id],
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

module.exports = getCatIdProducts;
