// Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.


//input array of integers
// rule: multiple all integers together, then divide by length of array
// output string value, rounded to three decimal places

//reduce

function multiplicativeAverage(array) {
  let len = array.length;
  let product = array.reduce((previousValue, currentValue) => previousValue * currentValue);
  let ma = product / array.length;
  return String(ma.toFixed(3))

}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
