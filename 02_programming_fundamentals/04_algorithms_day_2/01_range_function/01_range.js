// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.

function range(startNumber,endNumber) {
  let range1 = [];
  if (startNumber<endNumber) {
    for(let i=startNumber ; i<endNumber+1 ; i++) {
      range1.push(i);
    }
  }
  else {
    for(let i=startNumber ; i>endNumber-1 ; i--) {
      range1.push(i);
    }
  }
  console.log(range1);
  return range1;
}
//range(1,4);
//range(4,1);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = range;
