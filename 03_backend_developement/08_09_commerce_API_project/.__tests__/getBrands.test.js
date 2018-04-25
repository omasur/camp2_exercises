const getBrands = require("../handlers/getBrands.js");

test("getBrands return value and 547 rows", done => {
  expect.assertions(2);  // nombre de tests attendus OK
  const fake = {
    json: function (result) {
      expect(result[0].id).toBe("cbe1c32e-faa9-4911-ad8e-4422f2b627c9");
      expect(result.length).toBe(547);
      done();
    }
  };
  getBrands("",fake);
});
