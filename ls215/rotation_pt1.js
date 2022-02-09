/*
P: rotate an array by moving first elem to end of array.
input: array of elements
- elems can be of varying data types, does not matter
- return undefined if input is not an array
- return empty array if input is empty array
output: new array "rotated"
- rotateed means first element is now the last element. second element is first...
rule:
algo: create a copy of input array
- pop off first element.
- push popped element to the array.
*/

function rotateArray(array) {
  if (!array || !Array.isArray(array)) return undefined;
  if (array.length < 1) return [];
  return array.slice(1).concat(array[0]);
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

module.exports = rotateArray;
