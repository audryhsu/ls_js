// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.
//
// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

// input -- numbers
// return - EITHER double number unchanged OR arg * 2
// double number's length is even
// left side digits are the same as right side digits -- compare as numbers, not strings
// 0 returns 0

// algo - check if double number first
// if  integer into string and check length % 2 == 0
  // if yes, then split the string in the middle, where str length/2 ??
  // convert to nums and compare left digits with right digits
  // if equal, then return input number
  // Else, return multiple input num by two

function twice(num) {
  let length = String(num).length;
  if (length % 2 === 0) {
    let midpoint = length / 2;
    let left = String(num).slice(0, midpoint);
    let right = String(num).slice(midpoint);

    if (left === right) return num;
  }
  return num * 2;
}


twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
