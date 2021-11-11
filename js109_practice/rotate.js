// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.
//
// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

//input: array - could be strings or integers, or objects
//output: a NEW array
//rule: first element moved to the end of array.
//algo: slice the array to remove the first element, and append it to the end of resulting array

function rotateArray(array) {
  if (!array || !Array.isArray(array)) return undefined;
  if (array.length === 0) return array;
  let result = array.slice(1);
  result.push(array[0]);
  return result;
}

// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
// rotateArray([]);                       // []
//
// return `undefined` if the argument is not an array
rotateArray();                         // undefined
console.log(rotateArray(1));                        // undefined
//
//
// // the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]
