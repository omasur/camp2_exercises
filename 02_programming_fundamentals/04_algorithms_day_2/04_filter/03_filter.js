// filter takes an array of integer and a function of filtering by using an higher order function
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
let list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function pickEvenNumbers(num1) {
  return (num1 % 2 === 0) === true;
}

function filter(array, fn) {
  let newArray = [];
  newArray = array.filter(fn);
  console.log(newArray);
  return newArray;
}
filter (list2 , pickEvenNumbers);

// do not remove this line, it is for tests
module.exports = filter;
