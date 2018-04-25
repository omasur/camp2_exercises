const request = require("request");
const PG = require("pg");
const client = new PG.Client();
client.connect();
let counter = 0

function categories (callback) {
  const url = "https://decath-product-api.herokuapp.com/categories";
  request({ url: url }, function (error, response, body) {
    let bodyLength = JSON.parse(body).length;
    truncate("categories");
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
      } else {
        console.log("truncate done");
      }
    }
  );
}

function insert (row, bodyLength) {
  client.query(
    "INSERT into categories values($1::uuid, $2::int4, $3::text)",
    [row.id, row.decathlon_id, row.label],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
      }
      counter++;
      if (counter >= bodyLength) {
        client.end();
      }
    }
  );
}

categories(insert);
