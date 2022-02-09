/*
input: string input that represents number ranges
output: array of complete numbers that represent the ranges

rule: ranges can optionally include - : ..
- numbers are always increasing
- two numbers deliminated with a separator should include all numbers in between (counting up to second number )
- if second number of a range pair is numerically less than the first digit,
  - translate short hand to long hand digit

algo:
- split text on commas
- loop through each element
- if it's first element, add it to longHand array.
- if element > last longHand element, add to longHand array.

- if nonrange element, conver the element to longhand and add it to longhand array.
- if element is using ranges delimeter, get range starting from first number up to and including second number and add to longhand array
  - split the element on the delimeter
  - convert first num in range to longhand
  - convert second num in range to longhand
  - get array of the range of numbers in between both
  - concat array with longhand array
*/


function getFullArray(string) {
  let longHand = [];
  let shortHand = string.split(', ');

  for (let i = 0; i < shortHand.length; i++) {
    let range = shortHand[i].split(/[-:(..)]/);
    console.log(range);
    let startNum, endNum;

    if (longHand.length === 0) {
      longHand.push(Number(range[0])); //initialize longHand to first number in first range;
    }

    startNum = convertToLongNumber(range[0].split(''), longHand[longHand.length - 1]);

    if (range.length === 1) {
      longHand.push(startNum);
      continue;
    }

    if (range[1]) {
      endNum = convertToLongNumber(range[1].split(''), startNum);

      // console.log(startNum, endNum);
      let convertedRange = generateRange(startNum, endNum);

      // console.log("new range: ", convertedRange);
      longHand = longHand.concat(convertedRange);
    }

    if (range[2]) {
      startNum = endNum;
      endNum = convertToLongNumber(range[2], startNum);
      let convertedRange = generateRange(startNum, endNum);
      longHand = longHand.concat(convertedRange.slice(1));
    }
  }
  return longHand.slice(1);
}

function initializeLonghand(array) {
  array.push(0);
  return array;
}

function generateRange(num1, num2) {
  let array = [];
  for (let i = num1; i <= num2; i++) {
    array.push(i);
  }
  // console.log(array);
  return array;
}

function convertToLongNumber(digitsArray, minNumber) {
  let targetNumber = minNumber;

  while (true) {
    targetNumber += 1;
    if (endDigitsSame(targetNumber, digitsArray)) break;
  }
  return targetNumber;
}

// takes one arg as a number, and second arg is array of digits as string
function endDigitsSame(longerNum, shorterDigits) {
  let longerDigits = String(longerNum).split('');
  let sliceIndex = 1;

  if (longerDigits.length === 1) {
    sliceIndex = 0;
  }

  let matching = longerDigits.slice(sliceIndex).every((element, i) => element === shorterDigits[i]);
  return matching;

}


// console.log(getFullArray("1, 3, 7, 2, 4, 1") === [1, 3, 7, 12, 14, 21] );
// console.log(getFullArray("1-3, 1-2") === [1, 2, 3, 11, 12] );
// console.log(getFullArray("1:5:2") === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log(getFullArray("99-02") === [99, 100, 101, 102] );
console.log(getFullArray("104-2"));
console.log(getFullArray("104-02")); // edge case
console.log(getFullArray("545, 64:11"));

// examples:
// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// - 2 < 7, so 2 is short hand.
// - count up from 7 until the first number ends with a '2' digit = 12...2 -> 12
// - 4 --> count up from 12, add first number that ends in 4 = 14 ... 4 --> 14
// - 1...14, to 1?  1 --> 21 (keep adding 10 until element > longHand array element)

// "1-3, 1-2" --> 1, 2, 3, 11, 12
// - string match [\d]+[-:..][\d]
// - add range 1 through 3 to longHand array
// - convert 1 --> 11 by adding 10
// - convert 2 --> 12 by adding 10
// - count up from 11 to 12 and add to longhand array
//
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// equipvalent to 1:12
//
// "104-2" --> 104, 105, ... 112
// -
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611|
// question - can an input string used mixed separators?
//
