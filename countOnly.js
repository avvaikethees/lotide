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

// countOnly function implementation

//allItems is an array of strings that we need to loop through
// itemsToCount: an object specifying what to count
// our function has to return a report on all the strings found in the input array, and their respective counts
// our function needs to return an object
const countOnly = function (allItems, itemsToCount) {
  const results = {}
  

  for (const item of allItems) {
    //console.log(item);
  if (itemsToCount[item]) {
    if (results[item]) {
      results[item] += 1
    } else {
      results[item] = 1;
    }
  }
}
  return results;
}

// test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
]; 

const result1 = countOnly (firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

//Our assertEqual function can only compare primitive values. We ran into this issue when comparing arrays and ended up implementing assertArraysEqual, if you recall. The same will need to be done with objects to make our test code cleaner. Until we have that specialized assertion function, we will do it this, more cumbersome way.