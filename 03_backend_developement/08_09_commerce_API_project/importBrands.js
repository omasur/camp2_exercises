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
        return;
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
        return;
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


// Correction Version récurcive 
// const request = require("request");
// const PG = require("pg");
//
// const client = new PG.Client();
// client.connect();
//
// function getBrands() {
//   request({
//     url: "https://decath-product-api.herokuapp.com/brands"
//   }, function(error, response, body) {
//     if (error) {
//       console.warn(error);
//       return;
//     }
//     const brands = JSON.parse(body);
//
//     insertBrand(brands, 0);
//   });
// }
//
//
// function insertBrand(brands, index) {
//   client.query(
//     "INSERT INTO brands (id, title) VALUES ($1::uuid, $2::varchar);",
//     [brands[index].id, brands[index].title],
//     function(error, result) {
//       if (error) {
//         console.warn(error);
//         return;
//       }
//       if (brands[index + 1]) {
//         insertBrand(brands, index + 1);
//       } else {
//         client.end();
//       }
//     }
//   );
// }
//
// getBrands();
