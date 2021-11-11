// Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.

//input: array of numbers
//output: sum of the sums of each leading subsequence in array
//rule: similar to taking substrings, we are taking all combinations of array elements, including the first element, and taking the sum. then we sum all of the sum combos together.

//examples: 0, 0+1, 0+1+2.
//loop through each index position and take the slice of the array
// for each slice, sum the elements. save it to sums array?
// last, reduce the array into one sum.

// function sumOfSums(arr) {
//   let sumsArr = [];
//   arr.forEach((_, i) => {
//     let sum = arr.slice(0, i + 1)
//     .reduce((previousValue, currentValue) => previousValue + currentValue);
//     sumsArr.push(sum);
//   });
//   return sumsArr.reduce((previousValue, currentValue) => previousValue + currentValue);
// }

// TODO:  refactor using map. using more chaining.
function sumOfSums(arr) {
  return arr
  .map((_, index) =>
   arr.slice(0, index + 1).reduce((previousValue, currentValue) => previousValue + currentValue))
   .reduce((previousValue, currentValue) => previousValue + currentValue);

}


sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
