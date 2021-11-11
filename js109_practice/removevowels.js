// Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

//input: array of strings
//output: array of same strings but with vowels removed
//rule: for each string in array, return string without vowels, push to new array.
//algo:
//
// function removeVowels(array) {
//   const vowels = 'aeiouAEIOU'.split("");
//   let result = array.map(str => {
//     let consonances = [];
//     for (let char of str) {
//       if (!vowels.includes(char)) consonances.push(char);
//     }
//     return consonances.join("");
//   });
//   console.log(result);
// }
// double map? or map, then filter?

function removeVowels(array) {
  const vowels = 'aeiouAEIOU'.split("");
  let result = array.map(str => {
    return str.split("").filter(char => !vowels.includes(char)).join("");
  });
  return result;
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
