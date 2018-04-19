const greeting = require("./greeting");

test("Return Hello TOTO", function() {
  const result = greeting("toto");
  expect(result).toBe("Hello TOTO!");
});

test("Return Hello WORLD", function() {
  const result = greeting();
  expect(result).toBe("Hello WORLD!");
});
