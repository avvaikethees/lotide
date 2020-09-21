// let eqArrays = function(arrayOne, arrayTwo) {
//   for (let i = 0; i < arrayOne.length; i++) {

//     if (arrayOne[i] === arrayTwo[i]) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   return eqArrays;
// };

// let assertArraysEqual = function(arrayOne, arrayTwo) {
//   if (eqArrays(arrayOne, arrayTwo) === true) {
//     console.log("Assertion Passed!");
//   } else {
//     console.log("Assertion Failed!");
//   }
// };

let middle = function(array) {
  let middleArray = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middleArray.push(array[array.length / 2 - 1]);
      middleArray.push(array[array.length / 2]);
      
    } else {
      middleArray.push(array[Math.floor(array.length / 2)]);
    }
  }
  return middleArray;
};

module.exports = middle;

//assertArraysEqual (middle([1, 2, 3, 4]), [2,3])
// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3]));// => [2]
// console.log(middle([1, 2, 3, 4, 5]));// => [3]
// console.log(middle([1, 2, 3, 4]));// => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

//assertArraysEqual ([1,2,3], [1,2,3]); 
//assertArraysEqual ([1,2,3], [3,2,3]); 

//assertArraysEqual (middle([1, 2, 3, 4]), [2,3])
//let array = [1, 2, 3, 4, 5, 6]
//console.log (array.length)


// if the array is 5 in lenght I 'd want ti to return index 2 (3)
// so if the array is 6 in length I want it to return index 2 (3) and index 3 (4)
// if the array is 4 in lenght I'd want it to return index 1 (2) and index 2 (3)