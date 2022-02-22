// prompt user for an integer --> convert string into Number
// check if > 0
// if less than 0, go back to 1
// otherwise,
// ask for sum or product between 1 and integer, INCLUSIVE
  // use the reduce function
// if sum, sum the numbers from 1 inclusive of interger
// if product...
// log the output
//
// integer = 3
// 1, 2, 3
// 3+ 3

const readline = require('readline-sync');

function aggInts(integer, aggregator) {
  // create array of consecutive numbers
  let arr = [1];
  for (let counter = 2; counter <= integer; counter ++) {
    arr.push(counter);
  }
  // Determine if sum or product should be calculated
  if (aggregator === 's') {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let result = arr.reduce(reducer);
    console.log(`The sum of integers between 1 and ${integer} is ${result}`);
  } else {
    let reducer = (accumulator, currentValue) => accumulator * currentValue;
    let result = arr.reduce(reducer);
    console.log(`The product of integers between 1 and ${integer} is ${result}`);
  }
}

// main function
let int;
do {
  int = parseInt(readline.question("Please enter an integer greater than 0: " ));
} while (int <= 0 || isNaN(int));

let agg;
while (true) {
  agg = readline.question("Enter 's' to compute sum, or 'p' to computer product. ");
  console.log(agg);
  if (agg ==='s' || agg === 'p') break;
}

aggInts(int, agg);
