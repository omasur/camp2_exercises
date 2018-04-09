// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer
const log = (text) => console.log(text);

function squareDigits(number) {
  // Your code here
  let result ="";
  let squar=0;
  for (let i = 0; i < (number.toString()).length; i++) {
    squar = ((number.toString())[i] * (number.toString())[i]);
    result = result + squar.toString() ;
  }
  return parseInt(result,10);
}

console.log(squareDigits(419));
// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;
