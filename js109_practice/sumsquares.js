//input: integer number, n
//output: number -- difference between square of the sum of first n positive integers and sum of squares of first n positive integiers
//rule: square of sums of n ==> (1...n)^2
  // sum of squares of n ==> (1^2 + 2^2....n^2)
//algo: take the difference.

//ssd(2) ? ==> (1 + 2)^2 = 9....(1^2)
// base case, if n === 1, return 0

//recurive solution

function sumSquareDifference(n) {
  return squareOfSums(n) - sumOfSquares(n);
}
function sum(n) {
  if (n === 1) return 1;
  return sum(n - 1) + n;
}
function squareOfSums(n) {
  return sum(n)**2;
}

function sumOfSquares(n) {
  if (n === 1) return 1;
  return sumOfSquares(n - 1) + n**2;
}

//imperative solution - using map and reduce
function sumSquareDifference(n) {
  return squareOfSums(n) - sumOfSquares(n);
}
function squareOfSums(n) {
  let sum = [...Array(n)].map((elem, index) => index + 1).reduce((previousValue, currentValue) => previousValue + currentValue , 0);
  return sum**2;
}
function sumOfSquares(n) {
  let sum = [...Array(n)].map((elem, index) => index + 1).reduce((previousValue, currentValue) => previousValue + currentValue**2 , 0);
  return sum;
}
console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));
