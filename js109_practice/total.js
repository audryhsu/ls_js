// Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

//input array of checkNumbers
// output array of numbers with same elements
// rule - each element value is replaced with running total from original array
// arrays should have the same length.

// index 0 == index 0
// element at index 1 = index 0 + index 1..
// index 2 = 0 + 1 + 2 of original array

// or index 2 = index 1 of new array + index 2 of original array.

// algo - use the reduce function when index 1 or greater, on a slice of the original array
// index 0 == index 0
// running total from index 1 -- take initialArray.slice(0, 2)
// running total from index 2 -- take initialArray.slice(0, 3)

function reduceSum(array) {
  return array.reduce((accum, current) => accum + current)
}

// function runningTotal(array) {
//   if (array.length <= 1) return array;
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     let slice = array.slice(0, i + 1);
//     newArr.push(reduceSum(slice));
//   }
//   return newArr;
// }

// REFACTOR using map method
function runningTotal(array) {
  let sum = 0;
  let newArr = array.map(element => {
    return sum += element;
  })
  return newArr;
}


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
