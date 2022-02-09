/*
P: convert a string that represents a list of ranges in short hand, into an array of integers in long hand.

- looping through a comma separated list
  Elements could be either:
    1. non-ranges, just single number (handle differently)
    2. range of numbers in shorthand

Shorthand algo:
- parse shorthand on delimeters into two nums, a startNum and endNum
- startNum - has a relationship to latest longHand number
  - startNum > latest longhand
  - startNum must end in specified sig digits
  - getNextNumber(startNum, sigDigs)
- endNum - has relationship to startNum
  - endNum > startNum
  - endNum must end in specified sig digits
  - getNextNumber(last digit in longHand, sigDig)
- get range of numbers between startNum and endNum, inclusive
  - concat range array to longhand array

*/
function getFullArray(string) {
  let longHand = [0]; // first number in the shorthand sequence is always compared to 0
  let shortHand = string.split(', ');

  for (let i = 0; i < shortHand.length; i++) {

    let rangePair = shortHand[i].split(/[-:(..)]/);
    let latestNum = longHand[longHand.length - 1]; // latest number in our longhand array

    if (rangePair.length === 1) {
      let next = getNextNumber(latestNum, rangePair[0]); // if just a single number in sequence (non-range), then push a single number to longhand array
      longHand.push(next);
      continue; // go to next element in shortHand sequence
    }

    // loop through shorthand ranges in pairs to account for d:d:d example case;
    for (let i = 0; i < rangePair.length - 1; i++) {
      let startNum = getNextNumber(latestNum, rangePair[i]); // start number of range is always determined by comparing  to latest number in longHand array
      let endNum = getNextNumber(startNum, rangePair[i + 1]); // determine end of range number by comparing to first number in shorthand

      longHand = longHand.concat(generateRange(startNum, endNum));
    }

  }

  return uniqueOnly(longHand.slice(1)); //slice off leading zero and filter for unique values only
}

function uniqueOnly(array) {
  return array.filter((elem, i, array) => {
    return array.indexOf(elem) === i;
  });
}

function generateRange(num1, num2) {
  let array = [];
  for (let i = num1; i <= num2; i++) {
    array.push(i);
  }
  // console.log(array);
  return array;
}

function getNextNumber(minNumber, sigDigs) {
  let next = minNumber + 1;

  while (!compareDigits(next, sigDigs)) {
    next += 1; 4;
  }
  return next;
}

function compareDigits(number, endDigits) {
  let digits = String(number).split('');
  let sliceIndex = digits.length - endDigits.length;
  return digits.slice(sliceIndex).join('') === endDigits;
}

//test
console.log(getFullArray("1, 3, 7, 2, 4, 1")); // [1, 3, 7, 12, 14, 21]
console.log(getFullArray("104-2")); // [104...112]
console.log(getFullArray("104-02")); // [104....202]
console.log(getFullArray("1-3, 1-2")); // [1, 2, 3, 11, 12]
console.log(getFullArray("99-02")); // [99, 100, 101, 102]
console.log(getFullArray("545, 64:11")); // [545, 564, 565, .. 611 ]
console.log(getFullArray("1:5:2")); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
