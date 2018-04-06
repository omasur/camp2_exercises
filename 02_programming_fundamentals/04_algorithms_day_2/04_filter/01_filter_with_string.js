// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]
//let list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let list2 = [1, 2, 3];
//let list2 = [];
function filter(array, str) {
  // Your code here
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if ((str === "even") && (array[i] % 2 === 0)) {
      newArray.push(array[i]);
    } else if ((str === "odd") && (array[i] % 2 === 1)) {
      newArray.push(array[i]);
    } else if ((str !== "even") && (str !== "odd")) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
  return newArray;
}
filter(list2, "even");

// do not remove this line, it is for tests
module.exports = filter;
