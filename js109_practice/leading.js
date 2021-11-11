// Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

//input: string
//output: array of substrings of input String
//rule: each substring begins with first letter of word
// array length is equal to the string length
// sort array by string length

function leadingSubstrings(str) {
  let result = [...Array(str.length - 1)].reduce((array, _, currentIndex) => {
    array.push(array[currentIndex] + str[currentIndex + 1]);
    return array;
  }, [str[0]]);

  return result;
}

//refactor using a for loop and slice
// function leadingSubstrings(str) {
//   let result = [];
//   for (let i = 1; i < str.length + 1; i++) {
//     result.push(str.slice(0, i));
//   }
//   console.log(result);
//
// }
// function leadingSubstrings(string) {
//   return [...string].reduce((array, _, index) => {
//     array.push(string.slice(0, index + 1));
//     return array;
//   }, []);
// }

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
