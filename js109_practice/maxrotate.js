// Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

//input: number integer
//output: rotate first digit to the left.
// then, rotate all digits except for new first digit.
// then, rotate all digits except first two  digits.
// repeat again with first three digits fixed in place. last three digits are rotated.
// repeat again with first four digits, so only last two digits are rotated.
//rule: can be of any length -- need to know for count parameter
// leading zeros get dropped
//algo:735291
//call rotate right with 6 count of digits
// return that number, then call with 5 count of digits...
// use reduce? for loop? recursion

function maxRotation(number) {
  const maxCount = String(number).length;
  for (var i = maxCount; i > 0; i--) {
    number = rotateRightmostDigits(number, i)
  }
  console.log(number);
  return number;
}


function rotateRightmostDigits(number, count) {
  let digitsArr = String(number).split("")
  let toRotate = digitsArr.splice(digitsArr.length - count);
  rotatedNum = digitsArr.concat(rotateArray(toRotate)).join("");
  return Number(rotatedNum);
}

function rotateArray(array) {
  if (!array || !Array.isArray(array)) return undefined;
  if (array.length === 0) return array;
  let result = array.slice(1);
  result.push(array[0]);
  return result;
}

function rotateFirstDigit(str) {
  return str.slice(1) + str[0];
}

// maxRotation(735291);          // 321579
//
// maxRotation(3);               // 3
// maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
