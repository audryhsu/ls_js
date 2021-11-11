// After looking at LS soultion, try to immitate
// https://launchschool.com/exercises/6ec7341d

// LS Logic: caculate fib sequence by tracking first number, second number, and fib number (the sum), and the index of fib number
// compare it to the input bigInt that represents number of digits.
// compare by converting the fib number into a string and using length property
// return length as a bigInt

function findFibonacciIndexByLength(numberOfDigits) {
  // we know that the first two numbers in fib sequence are 1
  let first = 1n;
  let second = 1n;
  let index = 2n; //starting at second fib number
  let fib; // tracks fib number

  // iterate through fibonnci sequence and increment index tracker.
  // reassign first and second values as increment
  do {
    fib = first + second;
    index += 1n;
    first = second;
    second = fib;
  } while (String(fib).length < numberOfDigits);
  console.log(index);
  return index;
}


findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;
