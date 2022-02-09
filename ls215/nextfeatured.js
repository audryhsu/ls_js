/*
problem: given an int, find next largest featured number.
  - always be greater than input int, <= 9876543201
- featured number:
  - ODD
  - multiple of 7
  - all digits occur once
  - ex: 49
input: number
output: next featured numebr
rule:
- are all digits unique
- is multiple of 7
- is odd
algo:
ds:
*/
function featured(number) {
  do {
    number += 1;
    if (isFeaturedNumber(number)) {
      return number;
    }
  } while (number <= 9876543201);
  return "There is no possible number that fulfills those requirements.";
}

function isFeaturedNumber(number) {
  return (isMultipleOf7(number) && digitsUnique(number) && isOdd(number));
}

function isMultipleOf7(number) {
  return number >= 7 && number % 7 === 0;
}
function digitsUnique(number) {
  return String(number).split('')
    .every((digit, i) => String(number).indexOf(digit) === i);
}
function isOdd(number) {
  return number % 2 === 1;
}


featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
