/*
Given two arrays, return whether the two arrays are opposites of each other. That means both arrays are comprised only from elements a and b and the occurrences of these elements are swapped between the two arrays.

p: determine whether arrays are "opposites"
- same elements in both arrays, only two values a,b
- same num of occurences for each element
- occurences are "swaped", if a in arr1, b in arr2
- only two values in the array
input: two arrays
- arrays can contain strings, numbers, booleans,
- assume any dtype is ok

test:
- if arrs length different, return false
- if any of the arrs are empty, return false
- mixed dtypes
out: boolean

algo:
- create arr2 based off arr1
  - get a, b elements
  - map arr1 elements
    - if a, return b
- compare arr2 to input arr2?
  - would only work with primitive values, not references to objects

- check that arr1 and arr2 have the same elements
*/

// function isAntiArray(arr1, arr2) {
//   if (arr1.length !== arr2.length || arr1.length === 0 || arr2.length ===0) return false;
//   let arr1items = [...new Set(arr1)].sort()
//   let arr2items = [...new Set(arr2)].sort()

//   // console.log(arr1items, arr2items)
//   if (arr1items[0] !== arr2items[0] || arr1items[1] !== arr2items[1]) return false


//   for(let i=0; i<arr1.length; i++) {
//     if (arr1[i] === arr2[i]) return false;
//   }
//   return true;

// }
//Alternate solution is to use every.
function isAntiArray(arr1, arr2) {
  if (arr1.length < 1 || arr2.length < 1) return false;
  return arr1.every((el , i) => el !== arr2[i] && arr2.includes(el));
}


console.log(isAntiArray([6.28, true, 6.28], [true, false, true]) === false);

console.log(
  isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]) === true);

console.log(
  isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]) === true);
console.log(
  isAntiArray([3.14, true, 3.14], [3.14, false, 3.14]) === false);
console.log(
  isAntiArray([3.14, true, 3.14], [true, 3.14, true]) === true);
console.log(
  isAntiArray([undefined, true, true, undefined], [true, undefined, undefined, true]) === true);
console.log(
  isAntiArray([1, 2, 1], [1, 2]) === false);
console.log(
  isAntiArray([], []) === false);
console.log(
  isAntiArray([1, 'two'], ['two', 1]) === true);
console.log(
  isAntiArray([1, 'two'], ['three', 1]) === false);
