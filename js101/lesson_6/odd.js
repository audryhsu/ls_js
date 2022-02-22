// Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

// Requirements:
// - must take an integer as argument
// - interger may be positive, negative, or zero
// - take absolute value of argument
// - check if absolute value is odd
// - return true if odd
//
// Examples:
// - zero is not odd
// - does not need to handle floating point
//

function isOdd(integer) {
  if (Math.abs(integer) % 2 ===0) return false;
  return true;

}
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
