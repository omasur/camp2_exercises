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

/// Corrigé pour l'intérieur de la fonction
// const numberString = number.toString();
//
// const digits =
//   numberString
//     .split("")
//     .map((digitString) => parseInt(digitString, 10))
//
// const digitSquared = digits.map((digit) => digit * digit);
// const digitsJoined = digitSquared.join("");
// return parseInt(digitsJoined,10);

// Corrigé amélioré
// function squareDigits(number) {
//   const squareDigitsString =
//     number
//       .toString()
//       .split("")
//       .map((digitString) => parseInt(digitString, 10))
//       .map((digit) => digit * digit)
//       .join("");
// 
//   return parseInt(squareDigitsString, 10);
// }
