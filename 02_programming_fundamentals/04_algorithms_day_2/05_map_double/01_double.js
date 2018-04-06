// Create a function `double` which take an array of integer as parameter and return a new array with all values doubled.
// WARNING: You're not allowed to use `Array.map`!

// Your code here...
let list = [1, 2, 3, 4, 5, 6];
function double(list) {
  let newArray = [];
  for (let i = 0; i < list.length; i++) {
    newArray.push(list[i] * 2);
  }
  console.log(newArray);
  return newArray;
}
double(list);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = double;
