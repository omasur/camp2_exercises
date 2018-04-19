const hello_sailor = require("./hello_sailor");

test("Test if nobody", () => {
  console.log = jest.fn();
  hello_sailor();
  expect(console.log).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
});

test("Test if sailor", () => {
  console.log = jest.fn();
  hello_sailor("Rackam");
  expect(console.log).toHaveBeenCalledWith("Howdy Rackam!");
});
