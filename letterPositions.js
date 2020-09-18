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

//console.log(eqArrays([1,2,3], [1,2,3])); 
//console.log (eqArrays ([1, 2, 3], [3, 2, 1]));

let assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log ("Assertion Passed!")
  } else {
    console.log ("Assertion Failed!")
  }
}

// IMPLEMENTING FUNCTION
const letterPositions = function(sentence) {
  const results = {};
  const string = sentence.split(" ").join("");

  for (i = 0; i < string.length; i ++) {
    //console.log (noSpaceString[i]);
    //console.log ([i])
    let character = string[i]
    if (results[character]){
      results[character].push(i)
    } else {
      results[character] = [i];
    }
  }
  return results;
};

console.log (letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);

// const countLetter = function (string) {
//   const result = {};
//   // first I want to create a counter 
//   const noSpaceString = string.split(" ").join("");
//   for (const letter of noSpaceString) {
    
//     //console.log (letter)
//     //if (string[letter] !== " "){
//       if (result[letter]) {
//           result[letter] += 1
//         } else {
//           result[letter] = 1;
//     }
//   }
//   return result
// }

//return all the indices (zero-based positions) in the string where each character is found.
//For each letter, instead of returning just one number to represent its number of occurrences, 
//multiple numbers may be needed to represent all the places in the string that it shows up.