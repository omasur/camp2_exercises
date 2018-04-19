const to_words = require("./to_words");

test("Return empty sentence", function() {
  const result = to_words();
  expect(result).toEqual([]);
});

test("Return britsh sentence", function() {
  const result = to_words("Are you there? I'm.");
  expect(result).toEqual(["Are", "you", "there", "I", "m"]);
});

test("Return normal sentence", function() {
  const result = to_words("Mange tu ce midi? Moi, oui.");
  expect(result).toEqual(["Mange", "tu", "ce", "midi", "Moi", "oui"]);
});
