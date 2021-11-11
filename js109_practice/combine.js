// Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

// input - two arrays
// output - one array that is union of two input arrays
// rule - no duplication of values
// if original array has duplicates, remove dupes

// algo - cannot use + operand because it will concatenate arrays
// combine two arrays
// for each element in array 2, add it to array 1 if not already in array 1
// remove duplicates - set ?

function union(arr1, arr2) {
  const values = [...arr1, ...arr2];
  let result = [];
  values.forEach((item) => {
    if (!result.includes(item)) result.push(item);
  });
  console.log(result);
  return result;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

union([1, 3, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
