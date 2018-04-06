/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:
   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.

   YOU MUST USE array.map
*/

//let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let list = [1, 2, 3, 4, 5, 6];
function map1 (array) {
  let newArray;
  if ((array % 3 === 0) && (array % 5 === 0)) {
    newArray = "FizzBuzz";
  } else if (array % 5 === 0) {
    newArray = "Buzz";
  } else if (array % 3 === 0) {
    newArray = "Fizz";
  } else {
    newArray = array;
  }
  //console.log(newArray);
  return newArray;
}
//map1 = list.map(fizzBuzz);
function fizzBuzz(list) {
  return list.map(map1);
}

console.log(list);
console.log(fizzBuzz(list));

module.exports = fizzBuzz;
