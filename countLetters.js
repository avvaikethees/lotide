// checker
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
// implement a function that recieves a string (sentence) and returns a count of each of the letters in the 
const countLetter = function (string) {
  const result = {};
  // first I want to create a counter 
  const noSpaceString = string.split(" ").join("");
  for (const letter of noSpaceString) {
    
    //console.log (letter)
    //if (string[letter] !== " "){
      if (result[letter]) {
          result[letter] += 1
        } else {
          result[letter] = 1;
    }
  }
  return result
}

console.log(countLetter("i love lighthouse labs"));

const actual = countLetter ("i love lighthouse labs")
assertEqual (actual["i"], 2);

// let countLetters = function (someString) {
//   const results = {};
//   const x = someString.split(" ").join("");

//   for (let letter of x){
//     //console.log(letter);
//       if (results[letter]) { 
//         results[letter] += 1
//     } else {
//       results[letter] = 1;
//   }
 
// }
// return results;
// }
// console.log(countLetters("lighthouse in the house"));