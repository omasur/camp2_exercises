const request = require("request");
const PG = require("pg");
const client = new PG.Client();
client.connect();
let counter = 0

function products (callback) {

  // const txt = "Welcom to the hotel California";
  const url = "https://decath-product-api.herokuapp.com/products";
  request({ url: url }, function (error, response, body) {
    let bodyLength = JSON.parse(body).length;
    truncate("products");
    JSON.parse(body).forEach(function(element) {
      callback(element, bodyLength);
    });
  });
}

function truncate (table) {
  client.query(
    `truncate table ${table}`,
    // [table],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else { // do something with result
        console.log("truncate done");
      }
    }
  );
}

function insert (row, bodyLength) {
  client.query(
    "INSERT into products values($1::uuid, $2::integer, $3::text, $4::text, $5::uuid, $6::numeric, $7::numeric, $8::numeric, $9::integer, $10::text, $11::numeric)",
    [row.id, row.decathlon_id, row.title, row.description, row.brand_id, row.min_price, row.max_price, row.crossed_price, row.percent_reduction, row.image_path, row.rating],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else { // do something with result
      }
      counter++;
      if (counter >= bodyLength) {
        // console.log(counter);
        client.end();
      }
    }
  );
}

products(insert);
// insert("cbe1c32e-faa9-4911-ad8e-4422f2b627c9","titi");
