const request = require("request");
const PG = require("pg");
const client = new PG.Client();
client.connect();
let counter = 0

function brands (callback) {

  // const txt = "Welcom to the hotel California";
  const url = "https://decath-product-api.herokuapp.com/brands";
  request({ url: url }, function (error, response, body) {
    let bodyLength = JSON.parse(body).length;
    truncate("brands");
    JSON.parse(body).forEach(function(element) {
      callback(element.id, element.title, bodyLength);
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

function insert (id, title, bodyLength) {
  client.query(
    "INSERT into brands values($1::uuid, $2::text)",
    [id,title],
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

brands(insert);
// insert("cbe1c32e-faa9-4911-ad8e-4422f2b627c9","titi");
