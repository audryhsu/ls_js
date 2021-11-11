// Write a function that takes an Array as an argument and reverses its elements in place. That is, mutate the Array passed into this method. The return value should be the same Array object.
//
// You may not use Array.prototype.reverse().

//input array
// output -- SAME array object
// rule: reverse elements in place, mutating array
// if only one element or empty, return array

// pop each element and put in a new array...
// map...creates a new array for each element...
// starting at last element of the array, push each element into temp array
// decrement index counter until

// function reverse(array) {
//   let temp = [];
//   let counter = array.length - 1;
//   for (let i = counter; i >= 0; i--) {
//     temp.push(array[i]);
//   }
//   // console.log(temp);
//   array.forEach((_, i) => {
//     array[i] = temp[i];
//   });
//   // console.log(array);
//   return array;
// }

//refactor to use only one for loop
function reverse(array) {
  let temp = [...array];
  for (let i = 0; i < array.length; i ++) {
    array[i] = temp[temp.length - 1 - i]
  }
  return array;
}
// looping down array, loops backwards from temp array, and updating array elements
//1, 2, 3, 4
// array[0], temp[3 - 0]
// arra[1], temp[2]
//arr[2], tem[1]


let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
