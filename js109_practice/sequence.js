// Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.
//
// You may assume that the argument will always be a positive integer.

// input integer
// output arrays
// rule array containing 1 up to and including the input integer
//
// function sequence(num) {
//   let result = [];
//   for (let i = 1; i <= num; i++) {
//     result.push(i);
//   }
//   console.log(result);
//
// }

function sequence(num) {
  // initialize an array with n empty items. Use spread operator to fill array with n undefined
  let arr = [...Array(num)]
  let result = arr.map((element, index) => index + 1)
  console.log(result);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
