const fetch = require("node-fetch");
const productUuid = "efe288cb-fb63-4b23-b8df-529f04b8b02b";

fetch(`https://decath-product-api.herokuapp.com/products/${productUuid}`)
  .then((response) => response.json())
  .then((result) => {
    console.log("Result : ", result);
    return result;
    })
  .then((result) => fetch(`https://decath-product-api.herokuapp.com/brands/${result.brand_id}`))
  .then((responseBrands) => responseBrands.json())
  .then((resultBrands) => console.log("Title Brands : ", resultBrands.title))
  .catch((error) => {console.warn("Fucking error : ", error)})
