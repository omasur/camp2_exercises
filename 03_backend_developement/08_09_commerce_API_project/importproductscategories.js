const request = require("request");
const {Pool} = require ("pg");
const pool = new Pool();

function readCategories () {
  pool.query(
    "SELECT * FROM categories",
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        for (let i = 0; i<result.rows.length-1 ;i++) {
          console.log(result.rows[i].id);
          productsCat (result.rows[i].id, insert);
        }
      }
    }
  );
}
//
function productsCat (id, callback) {

  // const txt = "Welcom to the hotel California";
  const url = `https://decath-product-api.herokuapp.com/categories/${id}/products`;
  request({ url: url }, function (error, response, body) {
    let bodyLength = JSON.parse(body).length;
    truncate("product_categories");
    JSON.parse(body).forEach(function(element) {
      callback(element);
    });
  });
}
//
function truncate (table) {
  pool.query(
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

function insert (row) {
  pool.query(
    "INSERT into product_categories values($1::uuid, $2::uuid)",
    [row.id, row.category_id],
    function(error, result) {
      if (error) {
        console.warn(error);
      }
    }
  );
}

readCategories ();
