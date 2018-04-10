// Your task is to create a function that will sort every number contained in a given array.
//
// For example:
//
// sort([24, 7, 9, 72, -8]) === [-8, 7, 9, 24, 72]
//
// Note: You should not use Array.sort()

// Your code here : ex avec array omasur
//   return unsortedArray.sort(function(a, b) {
//     return a - b;
//   });
// }


function sort(unsortedArray) {
  let arrayHigh;
  let sortedArray;
  for (let i=0 ; i < unsortedArray.lenght ; i++) {
    if ((unsortedArray[i] > unsortedArray[i+1]) && (i <unsortedArray.lenght+1)) {
      arrayHigh = unsortedArray[i+1];
      unsortedArray.splice(i+1, 1, unsortedArray[i]);
      unsortedArray.splice(i, 1, arrayHigh);
      console.log ("Record temp = " , unsortedArray);
    }
  return unsortedArray;
}

console.log(sort([24, 7, 9, 72, -8]));

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = sort;
