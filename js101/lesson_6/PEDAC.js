function threeByThree(array) {
  if (array.length < 3) return false;

  let sumArray = [];

  array.forEach(element => {
    let digitArray = element.split('');
    let sum = digitArray.reduce((accumulator, currentValue) => accumulator + Number(currentValue));
    sumArray.push(sum);
  });

  let resultArray = sumArray.filter(number => number % 3 ===0);
  if (resultArray.length >= 3) return true;

  return false;
}

console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']));
// true
console.log(threeByThree(['01112', '2043', '12043']));
// false
console.log(threeByThree(['01112', '2043']));
// false
console.log(threeByThree(['93', '9', '1', '25', '1212']));
// true


// present problem analysis - PEDAC
// algorithm
// code solutions
//
// Problem Description
// Given an array of strings, return a boolean indicating whether
// at least three of the elements in the array have digits whose sum is
// divisible by 3.
//
// Elements of the argument array will be strings containing only string digits 0-9.
//
// For example:
// In the array ['35', '01110', '126', '57', '13'],
// the sum of the digits of each element will be: [8, 3, 9, 12, 4]
// from the resulting sums, there are 3 that are evenly divisible by 3: [3, 9, 12]
// so our function would return true.  See the below test cases for more examples.
//
//
// Test Cases
// console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']));
// 5, 3, 3,9
// // true
// console.log(threeByThree(['01112', '2043', '12043']));
// 5, 9, 10
// // false
// console.log(threeByThree(['01112', '2043']));
// // false
// console.log(threeByThree(['93', '9', '1', '25', '1212']));

// Understanding
// input --> array of string
// output --> return boolean
// sum the digits of each element and check if sum is divisible by 3 --> true
// check if three or more elements qualify --> true
// else return false
// elements of array are STRING digits 0 - 9
// will need to convert strings into numbers

// Examples
// if the array has less than 3 elements -- return false
// assume array contains contains valid strings

// data structure
// array to store the sum of digits
// algo
// create a sumArray to hold sum
// if length of array is < 3, return false
// given the input array, iterate through each element

// for each element that is a string of digits:
  // split the string of digits into a temporary array
  // convert the string items into Number types
  // use an array method (reduce?) to sum the integers
  // push the sum of digits into sumArray

// Check if sumArray has three or more elements that are divisible by three (filter method)
//
// use filter method (num % 3 === 0) and save results into a new divByThree array
// if length of of divByThree array >= 3
    //return true
    // else return false
