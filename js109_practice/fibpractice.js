// "select the element out of the array if its index is a Fibonacci number,"

//input: array of numbers
//output: return the element, if idx pos is fib number
//rule:
//algo:

function fibonacci(n) {
  if (n < 1) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 2) + fibonacci(n - 1);
}

function fibonacciProduct(n) {
  if (n === 2) return 1;
  return fibonacciProduct(n -1) * fibonacci(n);
}
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(6));
console.log(fibonacciProduct(4));
console.log(fibonacciProduct(5));
console.log(fibonacciProduct(6));
