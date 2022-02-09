/*
problem: implement bubble sort algo on an array
- multiple passes through array
  - each pass: compare pair of elems that are side by side
    - if e1 > e2, swap elements.
    - else, move to next pair.
  - repeat until a pass is made without any swaps.
input: array with at least two elements
- can be numbers, or strings
- if strings, sorted alphabetically
output: sorted array
rule:
algo:
- Iteration:
len 5
i1 starts at 0
i2 starts at i1 + 1
while i1 < array.length - 1
  - compare pairs (0,1)...slice(0, 2)...i1, i2+1
  - compare (1, 2)...slice (1, 3)... i1, i2+ 1
  - compare (2, 3)..
  - compare (3, 4) restart.
Swap:
  - slice the array to isolate the pair of elements
  - compare the elements
  - swap using destructuring.
  - insert pair back into the array at i1 using splice
    - flatten the array.
- loop through array
- compare i1, i2
  - if i1 > i2, call swap, returns array pair.
  - splice the array at i1, deleting 2 elements, insert the array pair.
- after looping through entire array, check swapped flag.
  - if true, restart the loop.
- condition to track when a swap has occured; -- boolean flag
ds:
*/

function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    // iterate through entire array, swapping values
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }

  } while (swapped);
  return array;

}

//
const array1 = [5,3];
const array2 = [6, 2, 7, 1, 4];
const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];

console.log(bubbleSort([5, 3]));
//
console.log(bubbleSort(array2));
// console.log(array2);    // [1, 2, 4, 6, 7]
console.log(bubbleSort(array3));
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
