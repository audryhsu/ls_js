/*
input: user provided input in string form,
- 'sum' ' product' 'integer > 0'

all input validation:
- leading or trailing spaces --> accept, trim

invalid inputs for input integer:
- '', 'undefined', null, NaN, Infinity, - Infinity, letters: invalid.
- leading zeros -- valid, ignore leading zeros
- negative string digit invalid.
- multiple str numbers provided are invalid
- floating points valid, round to nearest integer

invalid inputs for calulcation:
- MUST be a string matching 's' or 'p', case insensitive
- cannot be empty string, null, undefined, or any other falsey or digit
- MUST be just one char, or length ===1
- any other input is invalid
- "sum" or 'product" --> invalid, any string

output: calculate the sum/product between 1 and entered integer, inclusive -- up to and including input integer.
rule:
- input integer is provided first as a string, needs to be converted to a Number
- input operation should be case agnostic
algo:
 - validate inputStrNum
  -if invalid, return 'invalid input'
- validte inputStrOp
  -if invalid, return 'invalid input'
- get all numbers between 1 and inputStrNum as a Number
- if inputStrOp === 's',
  - reduce the range to a sum.
- else if inputStrOp === 'p'
  - reduce the range by multiplication
*/
const readline = require('readline-sync');
//
let inputStrNum = readline.question('Please enter an integer greater than 0: ');
let inputStrOp = readline.question('Enter "s" to computer the sum, or "p" to computer the product. ');

console.log(sumOrProductBot(inputStrNum, inputStrOp));

function sumOrProductBot(inputStrNum, inputStrOp) {
  let strNum = validateStrNumber(inputStrNum);
  if (!strNum) {
    return "Invalid input";
  }
  let strOp = validateString(inputStrOp);

  if (!strOp) return "Invalid input";
  let range = getRange(1, Number(strNum));

  let solution;
  if (strOp === 's') {
    solution = range.reduce((result, currentValue) => {
      result += currentValue;
      return result;
    }, 0);
  } else {
    solution = range.reduce((result, currentValue) => result *= currentValue);
  }
  return `The sum of the integers between 1 and ${strNum} is ${solution}`;
}

// - floating points valid, round to nearest integer
function validateStrNumber(string) {
  if (!string || string === '') {
    return false;
  }
  let cleanStr = String(string).trim();
  let num = Number(cleanStr);
  if (num === NaN || !num || num === Infinity || num === -Infinity || num < 0) {
    return false;
  }
  return Math.round(num);
}

function validateString(string)  {
  if (!string) {
    return false;
  }
  let cleanStr = String(string).trim().toLowerCase();
  if (cleanStr === 'p' || cleanStr === 's') {
    return cleanStr;
  }
  return false;
}

function getRange(start, end) {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(start);
    start += 1;
  }
  return array;
}


// testing input integer
// console.log(sumOrProductBot('5', 's') === 15);
// console.log(sumOrProductBot('6', 'p') === 720);
// console.log(sumOrProductBot('abc', 'p') === "Invalid input");
// console.log(sumOrProductBot('005', 's') === 15);
// console.log(sumOrProductBot('5.1', 's') === 15);
// console.log(sumOrProductBot('', 's') === "Invalid input");
// console.log(sumOrProductBot('-1', 's') === "Invalid input");
// console.log(sumOrProductBot('NaN', 's') === "Invalid input");
// console.log(sumOrProductBot(NaN, 's') === "Invalid input");
// console.log(sumOrProductBot(Infinity, 's') === "Invalid input");
// console.log(sumOrProductBot(-Infinity, 's') === "Invalid input");
// console.log(sumOrProductBot('Infinity', 's') === "Invalid input");
// console.log(sumOrProductBot(null, 's') === "Invalid input");
// console.log(sumOrProductBot(undefined, 's') === "Invalid input");
//
// // testing operation
// console.log(sumOrProductBot('5', '   s  ') === 15);
// console.log(sumOrProductBot('5', 'S') === 15);
// console.log(sumOrProductBot('5', '..s..') === "Invalid input");
// console.log(sumOrProductBot('1', 'sum') === "Invalid input");
// console.log(sumOrProductBot('1', 'product') === "Invalid input");
// console.log(sumOrProductBot('1', '') === "Invalid input");
// console.log(sumOrProductBot('1', '5') === "Invalid input");
// console.log(sumOrProductBot('1', '#%&s') === "Invalid input");
// console.log(sumOrProductBot('1', 'undefined') === "Invalid input");
// console.log(sumOrProductBot('1', undefined) === "Invalid input");
// console.log(sumOrProductBot('1', null) === "Invalid input");
