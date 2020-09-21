const assertEqual = require('./assertEqual');

// Implement Head funciton 
const head = function(list) {
  return list[0];
};


// // TEST CODE with assertEqual function 
// const assertEqual = function(actual, expected) {
//   const passed = String.fromCodePoint(0x1F929);
//   const failed = String.fromCodePoint(0x1F62C);

//   if (actual === expected) {
//     console.log(`${passed} ${passed} ${passed} Assertion Passed! ${actual} === ${expected}`);
//   } else {
//     console.log(`${failed} ${failed} ${failed} Assertion Failed: ${actual} !== ${expected}`);
//   }
// return 0
// };


// assertEqual(head([5,67]), 5); 
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;


