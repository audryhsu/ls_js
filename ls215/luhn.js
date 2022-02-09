/*
The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

Counting from the rightmost digit and moving left, double the value of every second digit
For any digit that thus become 10 or more, subtract 9 from the result
1111 becomes 2121
8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
Add all these digits together
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.
*/
/*
p: checking validity of a string per the Luhn formula
u:
- moving right to left, double value of every other digit
- if doubling digit makes it > 10, subtract 9 from the result
- sum the individual digits to generate checksum
  - if checksum ends in 0 (checksum % 10 ===0), then valid
  - else, not valid
/*
input: input string of digits
output: boolean
rule: ignore all non-numeric characters -- use regex
algo:
- process the input string, only match \d characters
- split the string into digits
- map: starting from end of the array to index 0
  - for every other digit, double the value (use a flag to toggle every other for doubling)
  -   if result of the double is > 10, subtract 9
  - return result
- reduce mapped array for checksum
- if checksum % 10 ===0, valid; else not valid
  */


/*
Part 2 - write a function that can add a check digit to make the number valid per the luhn formula nad return the original number plus that digit.
"2323 2005 7766 355" --> "2323 2005 7766 3554"
*/

// digit To Add = 10 - (checksum % 10)
// add a digit to end of string until it becomes a valid checksum;
// add digit to begin of digits string of reversed array
// loop through digits 0 - 9

function addCheck(string) {
  let checksum = luhnCheck(string);
  if (isValidLuhn(checksum)) return true;
  // let digits = string.match(/[\d]+/g).join('').split('').reverse();
  // let checkNum = 0;

  let newDigit = 10 - (checksum % 10);
  let newStr = string + String(newDigit);
  console.log("New String: ", newStr);

  if (!isValidLuhn(luhnCheck(newStr))) {
    console.log("Not correct");
  }

  // do {
  //   newStr = string + String(checkNum);
  //   checkNum += 1;
  // } while (!isValidLuhn(luhnCheck(newStr)));

  return newStr;

}

console.log(addCheck('876')); // looking for 8763
console.log(addCheck('1111')); /// 11114 - checksum return is 2121, sum 6...need to add four

function isValidLuhn(checksum) {
  return checksum % 10 === 0;
}
function luhnCheck(string) {
  let digits = string.match(/[\d]+/g).join('').split('').reverse();
  let double = false;

  let checksum = digits.reduce((result, currentValue, currentIndex) => {
    if (double) {

      let doubled = Number(currentValue) * 2;
      if (doubled >= 10) doubled -= 9;

      result += doubled;
      double = false;
    } else {
      result += Number(currentValue);
      double = true;
    }
    return result;
  }, 0);

  return checksum;
}
// //examples
// console.log(luhnCheck('2323 2005 7766 3554') === true);
// console.log(luhnCheck('1111') === false);
// console.log(luhnCheck('8763') === true);
