/*
problem:
input: three arrays
- input arrays can contain mixed dtypes - boolean, strings, numbers
-   undefined value ok, null values ok
- '' treat as a string.
output: one array that is all input arrays nested in one
rule:
- combined based on indexes
  - nestedarr0 -> contains all elements i0 from input arrays
  - nestedarr1 -> all elements i1 from input arrays ...
-
algo:
- validate inputs
  - three arrays
  - length of longest array --> nested arrays

- modify arrays so that they are the same length by appending *
  - for arrays that arr.length < longest.length
  - push * until arr.length === longest.length

  - 1st array -> loop through each input array,
  0,1,2 [i]
  looping through rows first
    - get elements at arrays[0][0]
      - arrays[1][0]
      - arrays [2][0]
      -
    - push to array
  - 2nd array, loop through each input array...
    - get elements at arrays [0][1]
    arrays[1][1]
    arrays[1][2]

  loop through arrays
    -
ds: arrays
*/

function combineArrays(...arrays) {
  //validate each arg is an array
  if (!arrays.every(array => Array.isArray(array))) return [];

  let [arr1, arr2, arr3 ] = arrays;


  let arrayLengths = arrays.map(array => array.length);
  let longest = arrayLengths.sort((a,b) => b - a)[0];

  arrays.forEach(arr => arr = padArray(arr, longest));

  //Transpose array
  let newArr = arrays[0].map((col, c) =>
    arrays.map((row, r) => arrays[r][c]));


  // Transpose inplace vanilla
  for (let r = 0; r < arrays.length; r++) {
  // only loop while c < r (half of matrix) because you are switching values with the other half
    for (let c = 0; c < r; c++) {
      // use a temp value to hold
      let temp = arrays[r][c];
      // reassign by swapping row and col indices
      arrays[r][c] = arrays[c][r];
      arrays[c][r] = temp;
    }
  }

  // console.log(newArr)
  return newArr;
  //return arrays;
}

function padArray(array, targetLength) {
  while (array.length !== targetLength) {
    array.push('*');
  }
  return array;
}

console.log(combineArrays([1, 2, 3, 33, 333], [4, 5, 6], [7, 8, 9]));
//[[1, 4, 7], [2, 5,  8], [3, 6, 9]]

// console.log(combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"])) // [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]
// console.log(combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]))
// // [false, "false", "*],...
// //[[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

// console.log(combineArrays([undefined, 2, 3], [4, 5, 6], [7, 8, 9]))
// // //[[undefined, 4, 7], [2, 5,  8], [3, 6, 9]]

// console.log(combineArrays(['', 2, 3], [4, 5, 6], [7, 8, 9]))
// // //[['', 4, 7], [2, 5,  8], [3, 6, 9]]

// console.log(combineArrays([{a:1}, 2, 3], [4, 5, 6], [7, 8, 9]))
// // //[[{a:1}, 4, 7], [2, 5,  8], [3, 6, 9]]
