/*
input: array of integers between 0 -19
output: array of integers sorted based on english word
rule: do not mutate the argument, return a new array
- map word version of a number to the integer itself in obj?
- custom sort order
- write a compare function takes two integers
  - compare the written word of each, with the to the other
ds:

algo:
*/
let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

function alphabeticNumberSort(array) {
  let arr = array.slice();

  let sorted = arr.sort(compareFn);
  console.log(sorted);
}
function compareFn(num1, num2) {
  if (words[num1] < words[num2]) {
    return -1;
  } else if (words[num1] > words[num2]) {
    return 1;
  } else {

    return 0;
  }
}

alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
