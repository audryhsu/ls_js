/*
input: two integers, first arg is the number to rotate. second arg represents the last n digits of input number to rotate.
output: rotated number
rule: rotate by one digit to the left by moving first digit to the end
algo:
- convert the number into a string
- slice the string digits at i, length - 1
  - split sliced str
  - rotate array and join.
  - concat first half of sliced str with rotated sliced str
  - convert to number and return
*/
const rotateArray = require('./rotation_pt1');


function rotateRightmostDigits(number, numDigits) {
  let strNum = String(number);
  let sliceIdx = strNum.length - numDigits;
  let sliceStr = strNum.slice(sliceIdx);
  let newStr = strNum.slice(0,sliceIdx).concat(rotateArray(sliceStr.split('')).join(''));
  // console.log(newStr);
  return Number(newStr);

}

module.exports = rotateRightmostDigits;

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
