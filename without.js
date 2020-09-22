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

// let without = function (sourceArray, itemsToRemove) {
//   let newArray = []; 

//   for (let i = 0; i < sourceArray.length; i ++){
//     if (!itemsToRemove.includes(sourceArray[i])) {
//       newArray.push (sourceArray[i])
//     }
//     }
//     return newArray
//   }

// const without = function(source, itemsToRemove) {
//   let newArray = [];
//   for (let i = 0; i < source.length; i++) {
//     let isSame = false;
//     for (let j = 0; j < itemsToRemove.length; j++) {
//       if (source[i] === itemsToRemove[j]) {
//         isSame = true;
//       }
//     }
//     if (isSame === false) {
//       newArray.push(source[i]);
//     }
//   }
//   return newArray;
// };

let without = function(source, itemToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemToRemove[i]) {
      newArray.push(source[i]);
    //console.log(source);
    }
  }
  return newArray;
};

module.exports = without;
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

//console.log(eqArrays([1,2,3], [1,2,3])); 
//console.log (eqArrays ([1, 2, 3], [3, 2, 1]));

