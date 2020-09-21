// let eqArrays = function (arrayOne, arrayTwo) {
//   for (let i=0; i < arrayOne.length; i++){

//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false
//     } 
//   }
//       return true
//     }

//console.log(eqArrays([1,2,3], [1,2,3])); 
//console.log (eqArrays ([1, 2, 3], [3, 2, 1]));
const eqArrays = require ('./eqArrays')

let assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log ("Assertion Passed!")
  } else {
    console.log ("Assertion Failed!")
  }
};

module.exports = assertArraysEqual
// assertArraysEqual ([1,2,3], [1,2,3]); 
// assertArraysEqual ([1,2,3], [3,2,3]); 