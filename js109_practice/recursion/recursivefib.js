// computes the nth Fibonacci number

// function fibonacci(n) {
//   if (n === 1) return 1;
//   if (n ===2) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

//refactored using memoization - save previously calculated fib numbers in an objects

function fibonacci(n) {
  let obj = {1: 1, 2: 1}
  if (n === 1) return obj[1];
  if (n === 2) return obj[2];
  obj[n - 1] = fibonacci(n - 1);
  obj[n - 2] = fibonacci(n - 2);

  return obj[n - 1] + obj[n - 2];
}


console.log(fibonacci(1));       // 1
fibonacci(2);       // 1
console.log(fibonacci(3));       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
let result = fibonacci(20);      // 6765

console.log(result);
