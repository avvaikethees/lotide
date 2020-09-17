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

//Implement function 

const findKeyByValue = function (object, value) {
  
}





const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);