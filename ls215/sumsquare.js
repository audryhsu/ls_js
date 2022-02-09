/*
input: integer
output: result - difference between the square of the sum of the first n positive integers and sum of squares of first n positive integers
1. square the sum of first n positive
2. summing squares of first n positive
3. compute difference

first n positive --> 1...n inclusive
1 --> 1 - 1 = 0
rule:
- n must be positive
- n is a number
algo:
 - validate n
 - create range of first n integers
 - calculate square of sums
 - calculate sum of squares
 - compute difference
*/
function sumSquareDifference(number) {
  if (!validN(number)) return null;
  let rangeArr = range(number);
  let result = squareOfSums(rangeArr) - sumOfSquares(rangeArr);
  console.log(result);
}

function sumOfSquares(array) {
  return array.reduce((result, cv, _) => result + Math.pow(cv, 2), 0);
}

function squareOfSums(array) {
  return array.reduce((result, cv, _) => result + cv, 0) ** 2;
}


function validN(number) {
  return (typeof number === 'number') && number >= 1 && number !== Infinity;
}

function range(number) {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(i);
  }
  return arr;
}


sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
