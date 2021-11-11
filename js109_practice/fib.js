// Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)
//
// Assume the argument is always an integer greater than or equal to two.

// input -- number that represents num of digits
// return number that represents index position + 1
// looking for fib number with number of digits specificed by input number

//ds - array to hold fib numbers
// algo
// if n is 2, -- looking for first number divisible by 10
// if n is 3 -- first number divisible by 100
// n --> divisible by 10 ** (n - 1)
// calculate fib sequence until the number is divisible by n
// get index position of number + 1

//implementation
// while Math.floor(fib number / 10 ** (n - 1)) < 1
// keep running sequence.

//  next number = arr[i] + arr[i-1]

function fibonacci(nth) {
  fibArr = [0 , 1];

  for (let i = 1; i < nth; i++) {
    fibArr.push(Number(fibArr[i - 1]) + Number(fibArr[i]));
  }
  // console.log(`The ${nth} Fibonacci number is ${fibArr[nth]}`);
  return fibArr[nth];
}

function findFibonacciIndexByLength(numberOfDigits) {
  let fibIndex = 1;
  let fibNumber;
  do {
    fibNumber= fibonacci(fibIndex);
    fibIndex += 1;
  } while (Math.floor(fibNumber / 10 ** (Number(numberOfDigits) - 1)) < 1)
  console.log(`DONE: Fib number at index ${fibIndex - 1} has ${numberOfDigits} of digits.`);
  return fibIndex - 1;
}

// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(5)); // 5
// console.log(fibonacci(6)); // 8
// console.log(fibonacci(7)); // 13

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.
