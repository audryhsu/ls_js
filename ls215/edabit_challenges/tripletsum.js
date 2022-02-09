/*
Create a function that takes an unsorted list of numbers and returns the number of unique triplets whose sum is equal to the variable n.

p:
i: unsorted list of nubers, and n (target sum)
- integers? negative numbers?
- flaots? COULD BE
- arrays < 3 elements? RETURN 0
- strings? NULL
- null, nan, infinity, etc.? NO
- sparse NO
- assuming no objects NO
- negative YES
n -> will it always be an integer? will it be positive? could be any
o: a number, represents count of unique triplets whose sum is equal to n
r:
- incrementing counter for each unique triplet that sums === n
  - triplet must be unique --? 0,2,9 is the same as 9,2,0
  - a number in the array can be long to more than one triplet
ds:
algo:
- find all combination triplets
  - sort and the array
  - use triple loop to get all subarray triplet combinations
  [i, j, k]
    where j starts at i +1
      k starts at j + 1

      reduce the triplet to sum
      if sum === n,
    add triplet array to combo array
    QC check that there are not duplicate triplets

    loop through each triplet
return length of triplets array


*/
function tripletSum(array, n) {
  if (array.some(e => typeof e !== 'number' || Number.isNaN(e))) return null;
  if (array.length < 3) return 0;
  if (typeof n !== 'number' || Number.isNaN(n)) return null;
  array.sort();

  let triplets = [];


  for (let i = 0; i < array.length; i++) {
  // first trip

    for (let j = i + 1; j < array.length; j++) {
      // second trip
      for (let k = j + 1; k < array.length; k++) {
        let triplet = [array[i], array[j], array[k]].sort();
        // console.log(triplet)


        if (sum(triplet) === n) triplets.push(triplet);

      }
    }
  }
  // convert each triplet into strings, to get an array of strings
  // use Sets to dedupe strings

  // NOT NECESSARY:  map each string back into an array arrays
  let strs = triplets.map(arr => arr.toString());
  let deduped = [...new Set(strs)];
  // let deduped = [...new Set(strs)].map(str => str.split(',').map(str => Number(str)))

  return deduped.length;
}

function sum(array) {
  return array.reduce((result, cv) => result + cv, 0);
}


// console.log(tripletSum([1, 0, 2, 6, 3, 9, 3],11) === 2,
// // Since we found two unique triplets that equate to 11: 0+2+9 and 2+6+3

// tripletSum([1, 2, 6, 3, 4, 5, 9, 10, 11], 20) === 5,
// // //10+9+1, 10+6+4, 11+5+4, 11+6+3, 9+5+6

// tripletSum([5, 2, 8], 2) === 0,
// tripletSum([], 2) === 0,
// tripletSum(['a','b','c'], 2) === null,
// tripletSum([1.5, 2.0, 2.5, 1.0], 5) === 1,
//   // 1.5 + 1 + 2.5
// tripletSum([1,2,3,-1,-2,-3, 7, 0], 6) === 2
//   //3+2+1, 7+0+-1
// )

// missed this testcase of duplicate numbers being used in the triplet
console.log(tripletSum([1, -2, 0, 6, 11, 15, 6, 2, 6, 0, 9, 2, 5, 8], 15) === 9);

/*
problem:
input:
output:
rule:
algo:
ds:
*/
