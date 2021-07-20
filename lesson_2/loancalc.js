// let monthlyPayment = loanAmt * (interestRate / (1 - Math.pow((1 + interestRate), (-loanDuration))));

function loanDurationMonths(loan_duration_years) {
  return Number(loan_duration_years) * 12;
}

function monthlyInterestRate(APR) {
  return parseFloat(APR) / 12 / 100;
}

function calculateMonthlyPayment(loanAmt, monthlyInterestRate, loanDurationMonths) {
  monthlyPayment = loanAmt * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));
  return monthlyPayment;
}

function invalidNumber(num) {
  if (/\s/.test(num)) {
    // checks if there is any kind of whitespace
    return true;
  }
  return Number.isNaN(Number(num));
}
function askForValidInput() {
  console.log('Please enter a valid number...');
}
// user enters formatted percentages
const readline = require('readline-sync');

let loanAmt = readline.question('What is the loan amount?\n');

while (invalidNumber(loanAmt)) {
  askForValidInput();
  loanAmt = readline.question('What is the loan amount?\n');
}
let duration = readline.question('What is the loan duration in years?\n');
while (invalidNumber(duration)) {
  askForValidInput();
  duration = readline.question('What is the loan duration in years?\n');
}
let apr = readline.question('What is the annual interest rate?\n');
while (invalidNumber(apr)) {
  askForValidInput();
  apr = readline.question('What is the annual interest rate?\n');
}
console.log(apr);
console.log(monthlyInterestRate(apr));
console.log(loanDurationMonths(duration));

monthlyPayment = calculateMonthlyPayment(loanAmt, monthlyInterestRate(apr), loanDurationMonths(duration));
console.log(`Monthly payment $ ${monthlyPayment.toFixed(2)}`);
