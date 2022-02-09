/*
Given two arrays smarr and bigarr, we say smlst is an ordered subarray of bigarr if all the elements of smarr can be found in bigarr, and in the same order.

Examples:

[4, 3, 2] is an ordered subarray of [5, 4, 3, 2, 1].
[5, 3, 1] is an ordered subarray of [5, 4, 3, 2, 1].
[5, 3, 1] is not and ordered subarray of [1, 2, 3, 4, 5] since elements are not in the same - [1, 2, 3] is an ordered subarray of [3, 2, 1, 2, 3].
Write a function that, given arrays smarr and bigarr, decides if smarr is an ordered subarray of bigarr.

/*
problem:
smlst -> ordered subarray of another larger array
  - order matters, do not sort either arrays
Questions:
- matter how much smaller smarr is to bigarr? TEST
- types of elements inside arrs ? YES
- non consecutive YES
- different dtypes YES
- sparse arrays? NO

input: two arrays of different lengths
output: boolean if smarr is ordered subarray of big array
rule:
  - all elements in smarr are in big arr
  - elements in smarr in same order as bigarr, do not have be consecutive, but order of appearance matters
  if smarr: a, b, c
  bigarr : index a < index b < index c
  ds:array
algo:
- validate arrays input
  - if lens same, return false
1. smarr elements in big arr elems
  - count number of occurences of each elem in smarr
  - check against num occurences in big arr;
2. order of smarr elems === order in big arr elements
 >> looping through smarr chars, iteratively slicing bigarr <<
  - find indx location of the first elem in smar arr
  - searcharr: slice bigarr from indx of first element to end
  - second elem in smarr, searchArr.indexOf(char)
  ...repeating until either a char index < 0 or found all indices of smarr in bigarr.
3. if both true, return true;
*/

// function isOrdSub(smarr, bigarr) {
//   if (smarr.length === bigarr.length || smarr.length < 0 || bigarr.length < 0) return false;
//   if (!isSub(smarr, bigarr)) return false;
//
//   for (let i = 0; i < smarr.length; i++) {
//     // console.log("looking for: ", smarr[i]);
//     let bigIndex = bigarr.indexOf(smarr[i]);
//     if (bigIndex < 0) return false;
//     bigarr = bigarr.slice(bigIndex + 1);
//   }
//
//   return true;
// }

function isOrdSub(smarr, bigarr) {
  for (let n of bigarr) // looping through bigarr
    smarr[0] === n && smarr.shift();
  console.log(smarr);
  return !smarr.length;
}

function isSub(smarr, bigarr) {
  let smarrCounts = {};
  let bigarrCounts = {};
  smarr.forEach((char, i) => {
    if (!smarrCounts[char]) smarrCounts[char] = 1;
    else {
      smarrCounts[char] += 1;
    }
  });
  bigarr.forEach((char, i) => {
    if (!bigarrCounts[char]) bigarrCounts[char] = 1;
    else {
      bigarrCounts;
      bigarrCounts[char] += 1;
    }
  });
  return Object.keys(smarrCounts).map((char, _) => bigarrCounts[char] >= smarrCounts[char]).every(item => item);
}
// console.log(isOrdSub([4, 3, 2], [5, 4, 3, 2, 1]) === true)
// // nonconsecutive
// console.log(isOrdSub([5, 3, 1], [5, 4, 3, 2, 1]) === true)
// console.log(isOrdSub([5, 3, 1, 1], [5, 4, 3, 2, 1]) === false)
//
console.log(isOrdSub([5, 3, 1], [5, 1, 4, 5, 3, 3, 2]) === false); // CHECK
console.log(isOrdSub([5, 3, 1], [1, 2, 3, 4, 5]) === false);
console.log(isOrdSub([1, 2, 3], [3, 2, 1, 2, 3]) === true);
//smaller arr
// console.log(isOrdSub([1, 2], [3, 2, 1, 2, 3]) === true)
// console.log("mixed types", isOrdSub(['1', '2'], [3, 2, '1', '2', '3']) === true)
// console.log("empty arrays", isOrdSub([], []) === false)
// console.log("equal lengths", isOrdSub([1], [1]) === false)
// //4 elem smaarr
// console.log("undefined and zeros", isOrdSub([0,1,0,0], [0,1,1,0,1,0,0]) === true)
// //booleans
// console.log("booleans", isOrdSub([false,true, false], [true,true, false, true, false]) === true)
