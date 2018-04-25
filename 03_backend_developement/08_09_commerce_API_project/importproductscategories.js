const request = require("request");
const {Pool} = require ("pg");
const pool = new Pool();

function readCategories () {
  truncate("product_categories");
  pool.query(
    "SELECT * FROM categories",
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        for (let i = 0; i<result.rows.length;i++) {
          productsCat (result.rows[i].id, insert);
        }
      }
    }
  );
}

function truncate (table) {
  pool.query(
    `truncate table ${table}`,
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        console.log("truncate done");
      }
    }
  );
}

function productsCat (id, callback) {
  const url = `https://decath-product-api.herokuapp.com/categories/${id}/products`;
  request({ url: url }, function (error, response, body) {
    let bodyLength = JSON.parse(body).length;
    JSON.parse(body).forEach(function(element) {
      callback(element, id);
    });
  });
}

function insert (row, id) {
  pool.query(
    "INSERT into product_categories values($1::uuid, $2::uuid)",
    [row.id, id],
    function(error, result) {
      if (error) {
        console.warn(error);
      }
    }
  );
}

readCategories ();
