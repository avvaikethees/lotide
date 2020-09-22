// Our map function will take in two arguments:
  // An array to map
  // A callback function

  let eqArrays = function (arrayOne, arrayTwo) {
    for (let i=0; i < arrayOne.length; i++){
  
      if (arrayOne[i] !== arrayTwo[i]) {
        return false
      } 
    }
    return true
  }
  
  //console.log(eqArrays([1,2,3], [1,2,3])); 
  //console.log (eqArrays ([1, 2, 3], [3, 2, 1]));
  
  let assertArraysEqual = function (arrayOne, arrayTwo) {
    if (eqArrays(arrayOne, arrayTwo) === true) {
      console.log ("Assertion Passed!")
    } else {
      console.log ("Assertion Failed!")
    }
  }

  const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

//map ();
const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual (results1, [ 'g', 'c', 't', 'm', 't' ])