// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

//input - two arrays
//output - one array that contains product of each PAIR of numbers from arr1 and arr2 at same index location
// rule: iterate through each element of both arrays and push product to new arrays
// foreach, map, or reduce
//
// function multiplyList(arr1, arr2) {
//   return  arr1.map((_, index) => arr1[index] * arr2[index]);
// }

//reduce

function multiplyList(arr1, arr2) {
  arr1.reduce((result, currentValue, index) => {
    result.push(arr1[index] * arr2[index]);
    return result;
  }, [])

}
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
