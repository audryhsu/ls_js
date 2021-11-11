//Recursion practice - non Fibonnaci because that sucks

//sum of all integers between 1 and n
// sum(5) = sum(4) + 5
function sum(n) {
  if (n === 1) return 1;
  return n + sum(n - 1);
}
let result = sum(5) // 5+4+3+2+1 = 15


// calculate value of n to the m power
// 2^ 4 == 2 * 2^3
//
// function power(n, m) {
//   if (m === 0) return 1;
//   // if (m === 1) return n;
//   return n * power(n, m - 1);
// }
// let result = power(2, 4)

console.log(result);

// sum of a natural number up to n
//sum(10) ==  10 + sum(9)
// function sum(n) {
//   if (n === 0) return 0;
//   return n + sum(n - 1);
//
// }
// let result = sum(10)
// let check = 10 + 9 + 8 +7+6+5+4+3+2+1+0
// console.log(check);


 // 5! = 5 x 4 x 3 x 2 x 1 = 120
// 5! = 5 * 4!
// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
//
// }
//
// let result = factorial(5);
