// write a function to solve for the nth fibonnaci number using a procedural (non-recurisve) approach.

function fibonacci(n) {
  let arr = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];

}

let result = fibonacci(100)
console.log(result);
