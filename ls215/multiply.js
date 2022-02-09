/*
input: two array args containing numbers
- float ok
- string number? convert it to a number, ignore leading zeros
- NaN, Infinitys, '' all invalid
- sparse array? ignore the empty slots and use just the filled array.
- if input is anything other than an array, return null;
output: one array containing product of all possible combinations of pairs between both arrays
rule:
- get the cross product
algo:
- validate both inputs are arrays
- validate array elements are valid
  - if it's a sparse array, remove the empty slot
  - if it's arr of string numbers, convert to integers
- loop through arr1,
  - arr2.map( multiply current element)
- flatten resulting array 1d
- sort

*/
function multiplyAllPairs(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return null;
  arr1 = validateElements(arr1);
  arr2 = validateElements(arr2);

  return arr1.flatMap((elem, index) => arr2.map(elem2 => elem2 * elem))
    .sort((a,b) => a - b);
}


function validateElements(array) {
  let denseArr = array.map(elem => Number(elem))
    .filter(elem => elem);
  return denseArr;
}


multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
multiplyAllPairs([2, , 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
multiplyAllPairs([2.5, 4], [4, 3, 1, 2]);    // [  2.5,  4,  5, 7.5, 8, 10, 12,  16]
multiplyAllPairs(['2', '4'], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
multiplyAllPairs([2, undefined], [4, 3, 1, 2]);    // [2, 4, 6, 8]
