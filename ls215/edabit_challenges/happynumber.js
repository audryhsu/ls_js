/*
A happy number is a number which yields a 1 by repeatedly summing up the square of its digits. If such a process results in an endless cycle of numbers containing 4, the number is said to be an unhappy number.

Create a function that accepts a number and determines whether the number is a happy number or not. Return true if so, false otherwise.
/*
problem:
- happy number: evaluates to 1 after looping and summing up square of number's digits
- unhappy: evaluates to 4 after ""
input: number
output: boolean if happy
rule:
algo:
- split number into digits
- calculate sum of the digit squares
- return as new number, continue
- stop when number is 1 or 4;
ds:
*/
function isHappy(number) {

  let digits = String(number).split('');
  while (true) {
    number = sumOfSquares(digits);
    if (number === 1 || number === 4) break;
    digits = String(number).split('');
  }
  return number === 1;
}

function sumOfSquares(array) {
  return array.reduce((result, currentDigit, _) => result + Math.pow(Number(currentDigit), 2), 0);
}


console.log(isHappy(13)); // false
console.log(
  isHappy(89)); //false
console.log(
//   isHappy(139)); // true
// console.log(
//   isHappy(1327)); // false
// console.log(
//   isHappy(2871)); // false
// console.log(
//   isHappy(3970)); // true
