const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const getBrands = require ("./handlers/getBrands.js");
const getBrandsId = require ("./handlers/getBrandsId.js");
const getCategory = require ("./handlers/getCategory.js");
const getCategoryId = require ("./handlers/getCategoryId.js");
const getProducts = require ("./handlers/getProducts.js");
const getProductsId = require ("./handlers/getProductsId.js");
const getCatIdProducts = require ("./handlers/getCatIdProducts.js");

app.get("/brands", getBrands);
app.get("/brands/:id", getBrandsId);
app.get("/categories", getCategory);
app.get("/categories/:id", getCategoryId);
app.get("/products", getProducts);
app.get("/products/:id", getProductsId);
app.get("/categories/:id/products", getCatIdProducts);

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
