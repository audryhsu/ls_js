// Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive:
//
// n!	Expansion	Result
// 1!	1	1
// 2!	1 * 2	2
// 3!	1 * 2 * 3	6
// 4!	1 * 2 * 3 * 4	24
// 5!	1 * 2 * 3 * 4 * 5	120
// You may assume that the argument is always a positive integer.
//
// Examples
// INCLUSIVe of n
// if n = 1, always 1
// if n = 0, always 0
// starting at 1, iterate through each number between 1 and n
  // multiply 1 * 1 + 1

function factorial(number) {
  if (number === 0) return 0;
  let product = 1;
  for (let i = 1; i < number; i++) {
    // product = product * (i + 1)
    product *= i + 1;
  }
  return product;

}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
