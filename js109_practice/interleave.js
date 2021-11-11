// Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.
//
// You may assume that both input arrays are non-empty, and that they have the same number of elements.

//input - two arrays
// output - new array
// rule - contains all elements of both arrays, alternating.
// arrays can have different datatypes


// loop through each element of both arrays
// add index i of array 1 to result array
// add index i of array 2 to result array

// function interleave(arr1, arr2) {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     result.push(arr1[i], arr2[i]);
//   }
//   console.log(result);
//   return result;
// }

function interleave(arr1, arr2) {
  // let result = [];

  // arr1.forEach((item, i) => {
  //   result.push(item, arr2[i]);
  // });

  // arr1.map((element, index) => result.push(element, arr2[index]))

  let result = arr1.reduce((previousValue, currentValue, index) => {
    previousValue.push(arr1[index], arr2[index]); //return value of this is value that is added to the array
    return previousValue; // callback must return the accumulating array to reducer
  }, []);

  console.log(result);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
