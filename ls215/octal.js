/*
input: string that represents an octal number
output: decimal version of that value as a Number

rule:
algo:
- let n be length of string
- for each digit from left to right, pow = n - i, where i starts at 1, ++
 - convert digit to number, multiply by base 8 pow
 - sum and return

 REMEMBER: to initialize `total` to 0, or else reduce will set the initial value of the accumulator to the first element of the array.
*/
function octalToDecimal(numberString) {

  let pow = numberString.length - 1;
  let digits = numberString.split('');

  let decimal = digits.reduce((total, digit, currentIndex) => {
    let result = Number(digit) * Math.pow(8, pow);
    pow--;
    return total + result;
  }, 0);

  console.log("final answer:", decimal);
  return decimal;
}

// octalToDecimal('1');           // 1
// octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9
