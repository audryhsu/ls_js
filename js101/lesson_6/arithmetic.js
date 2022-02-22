const readline = require('readline-sync');

function arithmetic(int1, int2) {
  let sum = Number(int1) + Number(int2);
  let diff = int1 - int2;
  let product = int1 * int2;
  let quotient = Math.floor(int1 / int2);
  let remainder = int1 % int2;
  let power = int1 ** int2;
  console.log(`Sum: ${sum}`);
  console.log(`Difference: ${diff}`);
  console.log(`Product: ${product}`);
  console.log(`Quotient: ${quotient}`);
  console.log(`Remainder: ${remainder}`);
  console.log(`Power: ${power}`);
}

let num1 = readline.question("Enter first number: ");
let num2 = readline.question("Enter second number: ");

arithmetic(num1, num2);
