// ask user for a bill amount
// ask user for tip rate in percentages
// log the tip amount and total bill
// convert to floats
// output rounded to nearest cent.

const readline = require('readline-sync');

let bill = parseFloat(readline.question("What is the bill? "));
let perc = readline.question("What is the tip percentages? ");

let tipAmt = parseFloat(bill * (perc / 100));
let billTotal = bill + tipAmt;

console.log(`The tip is $${tipAmt.toFixed(2)}`);
console.log(`the total is $${billTotal.toFixed(2)}`);
