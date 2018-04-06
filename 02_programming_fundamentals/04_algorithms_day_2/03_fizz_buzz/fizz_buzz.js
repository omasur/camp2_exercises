/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:

   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.
*/
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function fizzBuzz(list) {
  let newArray = [];
  for (let i = 0; i < list.length; i++) {
    if ((list[i] % 3 === 0) && (list[i] % 5 === 0)) {
      newArray.push("FizzBuzz");
    } else if (list[i] % 5 === 0) {
      newArray.push("Buzz");
    } else if (list[i] % 3 === 0) {
      newArray.push("Fizz");
    } else {
      newArray.push(list[i]);
    }
  }
  console.log(newArray);
  return newArray;
}
fizzBuzz(list);


module.exports = fizzBuzz;
