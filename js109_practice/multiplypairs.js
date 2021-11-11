// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.
//
// You may assume that neither argument will be an empty array.

//input: two arrays containing list of integers
//output: new array, products of all combinations of number pairs
//rule: new array, sorted in ascending order
//examples: loop through arr1, loop thorugh arr2, multiply and push to a new array
// sort array


function multiplyAllPairs(arr1, arr2) {
  let result = [];
  arr1.forEach((item1, i) => {
    arr2.forEach((item2, i) => {
      result.push(item1 * item2);
    });
  });
  return result.sort((a, b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
