//input: array
//output: sorted original array
//rule: compare idx 0 & idx 1
    // if idx 0 > idx 1, swap idx positions
    // compare idx 1 and idx 2...
      // if idx 1 > 2, swap.
//algo: iterate through array, looking at next two consecutive integers each time, all the way up to array.length - 2.
// track if a swap was made each full cycle
// if swap is true, continue.
// else, the array is sorted!

// swap pointers in array?
 // use save spliced off element to a temp variable, and replace it with current.

function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (var i = 0; i < array.length -1; i++) {
      let swap = () => {
        array.splice(i, 0, array[i + 1]); //insert smaller element infront of current ekement
        array.splice(i + 2, 1); //delete duplicate element that has been swapped
      }
      if (array[i] > array[i + 1]) {
        swap();
        swapped = true;
      }
    }

  } while (swapped);
  return array;
}
let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);
