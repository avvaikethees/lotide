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



const takeUntil = function(array, callback) {
  //const results = []; 
  let results = []

  for (i = 0; i < array.length; i ++) {
    if (callback(array[i]) === false) {
      results.push (array[i]);
    } else {
      return results
    }
  }

}

module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual (results1, [1, 2, 5, 7, 2])

//To keep things simple, the callback should only be provided one value: The item in the array