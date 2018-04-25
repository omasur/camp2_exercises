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


//// Correction
// const request = require("request");
// const PG = require("pg");
//
// const client = new PG.Client();
// client.connect();
//
// let counter = 0;
// const productCategoryList = [];
//
// request(
//   { url: "https://decath-product-api.herokuapp.com/categories" },
//   function(error, response, body) {
//     const categories = JSON.parse(body);
//     categories.forEach(function(category) {
//       request(
//         { url: `https://decath-product-api.herokuapp.com/categories/${category.id}/products` },
//         function( error, response, body) {
//           const products = JSON.parse(body);
//           products.forEach(function(product) {
//             productCategoryList.push({
//               categoryId: category.id,
//               productId: product.id
//             });
//           });
//           counter++;
//           if (counter >= categories.length) {
//             counter = 0;
//             productCategoryList.forEach(function(productCategory) {
//               client.query(
//                 "INSERT INTO products_categories (category_id, product_id) VALUES ($1::uuid, $2::uuid)",
//                 [productCategory.categoryId, productCategory.productId],
//                 function(error, result) {
//                   if (error) {
//                     console.warn(error);
//                   } else {
//                     counter++;
//                     if (counter >= productCategoryList.length) {
//                       client.end();
//                     }
//                   }
//                 }
//               );
//             });
//           }
//         }
//       );
//     });
//   }
// );
