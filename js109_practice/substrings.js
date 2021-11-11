// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.
//
// You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

//input: string of letters
//output: list of all substrings.
//rule: list is ordered by index position of the substring start letter. Suborder by length of string, shortest to longest.
//examples: for each substring in string,
// run leading substring function and return list of char substrings.
// for next iteration, slice input string
// once the loop is done, combine all substring lists into a 1D array.
// DS: list of lists.

//'abcde'
//'bcde' arr.slice(1).join("") ==> next substring for leadingSubstrings
// loop through each element
  //slice array for substring and join with the remaining elements
  // run leadingSubstrings and push to results

// function substrings(string) {
//   let result = [];
//   for (var i = 0; i < string.length; i++) {
//     let substring = string.slice(i, string.length);
//     console.log(substring);
//     result.push(leadingSubstrings(substring));
//   }
//   result = result.flat();
//   return result;
// }

//Futher expolration - using list processing
function substrings(string) {
  let result = string.split("").map((elem, index) => leadingSubstrings(string.slice(index))).flat();
  console.log(result);
  return result;
}
// other user's solution
// function substrings(inputString) {
//   let result= inputString.split('')
//     .map((_, idx) => leadingSubstrings(inputString.slice(idx)));
//   console.log(result);
// }

function leadingSubstrings(string) {
  return [...string].reduce((array, _, index) => {
    array.push(string.slice(0, index + 1));
    return array;
  }, []);
}


substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
