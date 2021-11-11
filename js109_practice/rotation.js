// Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

//input: two numbers, number, and count digits to rotate
//output: one number integer
//rule: using count as the substring of digits from the right that are in scope for rotation
//algo: split the number into digits
// in scope numbers -- arr.length - count

function rotateRightmostDigits(number, count) {
  let result = String(number).split("")
  let toRotate = result.splice(result.length - count);
  result = result.concat(rotateArray(toRotate)).join("");
  console.log(result);
}

function rotateArray(array) {
  if (!array || !Array.isArray(array)) return undefined;
  if (array.length === 0) return array;
  let result = array.slice(1);
  result.push(array[0]);
  return result;
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
