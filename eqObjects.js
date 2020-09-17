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
//Compares two arrays 
let eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i=0; i < arrayOne.length; i++){

    if (arrayOne[i] !== arrayTwo[i]) {
      return false
  }
}
  return eqArrays
}



const eqObjects = function (object1, object2) {
  
  let arrayOne = Object.keys(object1);
  let arrayTwo = Object.keys (object2)
  //console.log (arrayOne)
  //let noOfKeys = false
  if (arrayOne.length !== arrayTwo.length) {
    return false
    //console.log(noOfKeys)
  }

   if (arrayOne.length === arrayTwo.length) {
    for (let key of arrayOne) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key],object2[key])) {
          return false;
        }
        } else if (object1[key] !== object2[key]) {
      return false
    } 
  } 
}
return true
}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2);


//assertEqual(eqObjects(ab, ba), true);
//assertEqual(eqObjects(ab, abc), false); 
assertEqual(eqObjects(cd, dc), true); 
assertEqual(eqObjects(cd, cd2), false);