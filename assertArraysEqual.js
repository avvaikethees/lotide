let eqArrays = function (arrayOne, arrayTwo) {
  for (let i=0; i < arrayOne.length; i++){

    if (arrayOne[i] === arrayTwo[i]) {
      return true
    } else {
      return false
    }
  }
  return eqArrays
}

console.log(eqArrays([1,2,3], [1,2,3])); 
console.log (eqArrays ([1, 2, 3], [3, 2, 1]));

let assertArraysEqual = function () {
  if (eqArrays() === true) {
    console.log ("Assertion Passed!")
  } else {
    console.log ("Assertion Failed!")
  }
}

assertArraysEqual (); 