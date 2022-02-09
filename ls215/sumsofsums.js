/*
input: array of numbers
output: sum of sums of each leading subsequence in array
rule:
- track index
- i0
- 0,1
- 0,1,2...
repeat this array.length times
algo:
- get sum of first element
- get sum of first and second element
- get sum of first, second, third element
looping through elements, boundary of the loop is increasing each iteration.
starting at i = 1, increment by one while i is < length of the array.
- arr.slice(0, 1)--> 3
- arr.slice(0, 2) --> 3,5

- add slices to total array and then reduce to a sum.
*/

function sumOfSums(array) {
  return array.flatMap((item, i, array) => array.slice(0, i + 1))
    .reduce((result, currentValue) => result += currentValue, 0);
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
