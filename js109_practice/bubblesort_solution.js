// refactoring to use destructuring reassignment instead of splice


function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (var i = 0; i < array.length -1; i++) {

      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }

  } while (swapped);
  return array;
}
let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]
