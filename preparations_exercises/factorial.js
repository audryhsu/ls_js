// function factorial(number) {
//   let result = 1;
//   for (let counter = number; counter > 0; counter--) {
//     result *= counter;
//   }
//   return result;
// }
//
// console.log(factorial(3));

// using recursion

function factorial(number) {
  //base case
  if (number === 1) {
    return = 1;
  }
  return number * factorial(number - 1);
}
