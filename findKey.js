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

//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const findKey = function (object, callback) {
  
  let array = Object.keys(object)

  for (let key of array) {
    if (callback(object[key])) {
      return key;
    }
    }
  }
// for (i = 0; i < array.length; i ++) {
//   if (object[key] === callback(object))
// }

let test = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)

console.log (test); 

assertEqual (test, "noma");
//FIND KEY BY VALUE FOR REF 

 // const findKeyByValue = function (object, value) {
    // let array = Object.keys(object)
    // for (let key of array) {
    // if (object[key] === value) {
    // return key;
    // }
    // }
    // return undefined
    // }


// TAKE UNTIL FUNCTION FOR REF 
// for (i = 0; i < array.length; i ++) {
//   if (callback(array[i]) === false) {
//     results.push (array[i]);
//   } else {
//     return results
//   }
// }
// }
