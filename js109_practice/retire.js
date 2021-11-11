/*
Build a program that logs when the user will retire and how many more years the user has to work until retirement.

Example:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
-----
prob:
input: ask user for age and retirement age. (integer from a string)
output: log current year and the year of retirement.

algo: take the difference between retirement age and current age, add to current year.
call new Date constructor to create a Date object, then use Date methods to get current year.  
*/

const readline = require('readline-sync');

function retire() {
  let age = Number(readline.question('What is your age? '));
  let retireAge = Number(readline.question('At what age would you like to retire? '));

  let currYear = new Date(Date.now()).getFullYear();
  let yearsLeft = retireAge - age;
  let retireYear = currYear + yearsLeft;

  console.log(`It's ${currYear}. You will retire in ${retireYear}
  You have only ${yearsLeft} of work to go!`);
}

retire();
