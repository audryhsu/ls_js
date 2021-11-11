// Given an unordered array and the information that exactly one value in the array occurs twice (every other value occurs exactly once), determine which value occurs twice. Write a function that will find and return the duplicate value that is in the array.

//input - array
// rule - find value that occurs twice in array
// output - return one value

// add each element to an object as a key and count occurences, then return key where count is > 1
// iterate through array and add each element to a new array, comparing if that value already exists


// One Way - 14.553ms
// function findDup(array) {
//   let obj = {};
//   array.forEach((item) => {
//     if (!obj[item]) obj[item] = 1;
//     else {
//       obj[item] += 1;
//     }
//   });
//   for (prop in obj) {
//     if (obj[prop] > 1) console.log(prop);
//   }
// }

// Second way - 7.376ms
function findDup(array) {
  let temp = [];
  let dup;
  array.forEach((item, i) => {
    if (!temp.includes(item)) temp.push(item);
    else {
      dup = item;
    }
  });
  console.log(dup);

}

// Two alternative methods comparing index positions of element. If it's a duplicate, then the first occurence of the value will not equal the dupes index number.
// function findDup(array) {
//   array = array.filter((ele, index) => array.indexOf(ele) !== index);
//   return array[0];
//
// }

// function findDup(array) {
//   for (elem in array) {
//     if (array.indexOf(elem) != array.lastIndexOf(elem)) return elem;
//   }
//
// }

console.time('findDup')

// findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73
console.timeEnd('findDup')
