// filter takes an array of integer and a function of filtering
// such as filter([1, 2, 3, 4, 5], pickEvenNumbers) returns [2, 4]
let list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function pickEvenNumbers(num1) {
  return (num1 % 2 === 0);
}

function filter(array, fn) {
  // Your code here
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i]) === true) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
  return newArray;
}
filter(list2, pickEvenNumbers);

// do not remove this line, it is for tests
module.exports = filter;
