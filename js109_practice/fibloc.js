//input: integer n that represents number of digits the target fib number should have.
//output: index location i  of the first Fib number that has n number of digits
//rule: first two numbers in fib sequence are 1 and 1; to get i + 1 Fib, take the sum of the previous two fib numbers.
  // [1, 1, ?]
  // fib[i + 1] = fib[i] + fib[i - 1]
  // check if number of digits of fib[i + 1] === n?
  // if yes, return i + 1; otherwise, continue iterating i, and find i + 1...
//algo:

function findFibonacciIndexByLength(n) {
  let fibArr = [1n, 1n];
  let i = 1;
  while (true) {
    let next = fibArr[i] + fibArr[i - 1];
    fibArr.push(next);
    if (String(next).split("").length === n) break;
    i++;
  }
  return BigInt(fibArr.length);
}

findFibonacciIndexByLength(2) === 7n;    // 1 1 2 3 5 8 13
let result = findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;
console.log(result);
// The last example may take a minute or so to run.
