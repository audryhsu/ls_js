// Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:
//
// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

//input: array of integers, between 0 and 19
//output: array of integers, sorted based on english word for each number
//rule: map each digit to the english word into a new array, then sort alphabetically, then map each english word back to digit into the output array
//examples:

//use an object of key values

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

const numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function zippedObj(arr1, arr2) {
  let entries = arr1.map((elem, index) => [arr1[index], arr2[index]]);
  return Object.fromEntries(entries);
}

function alphabeticNumberSort(array) {
  //create an array of word version of numbers and sort alphabetically
  let sortedNumWords = array.map((elem) => obj[elem]).sort();

  // transform sorted array back into numerical version of numbers
  let result = sortedNumWords.map((elem, index) => {
    for (let prop in obj) {
      if (obj[prop] == elem) return Number(prop);
    } });
  return result;

}
// helper function to zip two arrays and return an Object
const obj = zippedObj(nums, numWords);

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
   // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]);
