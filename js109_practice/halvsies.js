// Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

//input - array
// output - array with two elements, which are nested arrays
// rule - first half of input array in first nested array.
// if input array has odd elements, place middle element in first half of array

// determine if input array has even or odd elements
// if even, slice array in half as a new array
// if odd, slice array in half + 1, as a new array
// push both arrays to result

function halvsies(array) {
  let result = [];
  let first = [];
  let second = [];
  if (array.length % 2 === 0) {
    first = array.slice(0, array.length / 2);
    second = array.slice((array.length / 2));
  } else {
    first = array.slice(0, Math.round(array.length / 2));
    second = array.slice(Math.round(array.length / 2));
  }
  result.push(first, second)
  return result;
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
