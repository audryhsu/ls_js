// ask user for first and second number
// ask for operation
// perform operation
// display result
const readline = require('readline-sync');
let gameplay = true;

function prompt(msg) {
  console.log(`=> ${msg}`);

}
function invalidNumber(num) {
  if (/\s/.test(num)) {
    // checks if there is any kind of whitespace
    return true;
  }
  return Number.isNaN(num);
}
while (gameplay) {

  prompt('Welcome to calculator!');
  let number1 = Number(readline.question('What is the first number?\n'));
  console.log(typeof(number1));

  while (invalidNumber(number1)) {
    prompt('Not a valid number..')
    number1 = readline.question();
  }

  let number2 = Number(readline.question('What is the second number?\n'));
  while (invalidNumber(number2)) {
    prompt('Not a valid number..')
    number2 = readline.question();
  }
  prompt('What operation would you like to perform?\n1)Add 2) Subtract 3) Multiply 4) Divide');

  let operation = Number(readline.question());
  while (![1,2,3,4].includes(operation)) {
    prompt('Must choose 1, 2, 3, or 4')
    operation = Number(readline.question());
  }


  let output;
  switch (operation) {
    case 1:
      output = number1 + number2;
      break;
    case 2:
      output = number1 - number2;
      break;
    case 3:
      output = number1 * number2;
      break;
    case 4:
      output = number1 / number2;
      break;
  }
  prompt(output);

  prompt('Do you want to keep playing? Y/N');
  answer = readline.question().toUpperCase();
  if (answer === 'N') {
    gameplay = false;
  }

}
