const assertEqual = function(actual, expected) {
  const passed = String.fromCodePoint(0x1F929);
  const failed = String.fromCodePoint(0x1F62C);

  if (actual === expected) {
    console.log(`${passed} ${passed} ${passed} Assertion Passed! ${actual} === ${expected}`);
  } else {
    console.log(`${failed} ${failed} ${failed} Assertion Failed: ${actual} !== ${expected}`);
  }
return 0
};

let eqArrays = function (arrayOne, arrayTwo) {
 // comparing the lengths - may not be necessary?
 // if (arrayOne.length !== arrayTwo.length) {
 //   return false;
 // }; 
    
  for (let i=0; i < arrayOne.length; i++){

    if (arrayOne[i] === arrayTwo[i]) {
      return true
    } else {
      return false
    }
  }
  return eqArrays
}


//console.log(eqArrays([1,2,3], [1,2,3])); 
//console.log (eqArrays ([1, 2, 3], [3, 2, 1]));

//console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
//console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 3]), true);
//assertEqual(eqArrays([“No thank you”], [“Yes Please”]), false);
//assertEqual(eqArrays([“Hello”], [“Hello”]), true);

