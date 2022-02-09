/*
input: number
output: number after its max rotation
rule:
- rotate all digits by one digit to the left -- first digit moved to the back
- rotate digits starting from idx 1 to end to the left.
- rotate digits from index 2 to the end...
- rotating starting from i + 1...
algo:
- pass into rotateRightmostDigits the full length of array
- keep calling it, decrementing 2nd arg by one, until 1 (the last digit )
-
*/
const rotateRightmostDigits = require('./rotation_pt2');

function maxRotation(number) {
  if (typeof number !== 'number' || Number.isNaN(number)) return null;
  let digitsToRotate = String(number).length;

  for (let i = digitsToRotate; i > 0; i--) {
    number = rotateRightmostDigits(number, i);
  }
  console.log(number);
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
