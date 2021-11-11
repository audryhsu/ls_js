/*
Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

problem -
input: six numbers from user  (string types)
output: log if sixth number appears in any of the prior five numbers; list out prior five numbers.

rules: number appears msut be exact match, compare number types
algo:
- ask input six times
- store each number as a number type in array
- check if sixth number is included in array

EXAMPLES:
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

REFACTOR - use a while loop to ask for input
 - while arr lenght is less than 6, ask for input
*/

const readline = require('readline-sync');

function checkNumbers(number) {
  let arr = [];
  let obj = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    4: 'th',
    5: 'th',
  }
  for (let i = 1; i < 7; i++) {
    let num = 0;
    if (i == 6) {
      num = Number(readline.question(`Enter the last number: `));
    }
    else {
      num = Number(readline.question(`Enter the ${i}${obj[i]} number: `));
    }
    arr.push(num);
  }

  if (arr.includes(number)) {
    console.log(`The number ${number} appears in ${arr}`);
  } else {
    console.log(`The number ${number} does not appear in ${arr}`);
  }

}

checkNumbers(18);
