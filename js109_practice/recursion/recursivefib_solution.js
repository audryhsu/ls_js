let memo = {};

function fibonacci(nth) {
  // preset cache for fib1 and fib2
  if (nth <= 2) {
    return 1;
  //how would memo object have fib(nth) already cached?
  } else if (memo[nth]) {
    console.log(`memo[nth] is ${memo[nth]}`);
    return memo[nth];
  // looks like we are still doing two recurisve calls ?
  } else {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    console.log(`mem[nth] was calculated: ${memo[nth]}`);
    return memo[nth];
  }
}

let result = fibonacci(7);      // 6765

console.log(result);
