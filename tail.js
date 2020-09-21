//const assertEqual
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//Implementing Tail function
const tail = function(list) {
  return list.slice(1);
};

//tail(words);

module.exports = tail; 


//TESTING THE CODE
// const assertEqual = function(actual, expected) {
//   const passed = String.fromCodePoint(0x1F929);
//   const failed = String.fromCodePoint(0x1F62C);

//   if (actual === expected) {
//     console.log(`${passed} ${passed} ${passed} Assertion Passed! ${actual} === ${expected}`);
//   } else {
//     console.log(`${failed} ${failed} ${failed} Assertion Failed: ${actual} !== ${expected}`);
//   }
//   return 0;
// };

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
//assertEqual(words.length, 3);


