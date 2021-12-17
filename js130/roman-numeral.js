/*
/*
input: given modern number as input, create a RomanNumeral object.
- toRoman method returns a string that represents the roman numeral.
output:
rule:
- do not need to convert greater than 3000
- skip any digit that is 0
- 4's and 9's are always the next Roman numeral prepended with a subtracted symbol
given a numeral, if the prev. numeral is smaller, then subtract prev. num from current numeral.
else, add the numerals.

I
IV , V
IX, X
XL, L - 40, 50
LIV - 54
ILX - 59
XC, C - 90, 100
CD, D  - 400, 500

XM, M - 900 1000
MMM - 3000
algo: 402
- create finalRoman string variable.
- currRoman - the in progress string.
- convert the number into strings
- split the string nums
- first num - determine what place it is in.

- if digit is 2, 3
  - repeat I
  - look through collection for digit < current number.
  - current number - digit = 1, I
  - if there is a remainder, it again = 1, I
- if 6, 7, 8:
  - get 5. difference... 7 - 5 = 2;
  - current digit is 2.

- IF NUM CONTAINS A 4 OR 9 -- different rule;s
  - loop through collection and return next numeral that is greater than or equal to current number.
    - 500 - if greater than, find the difference: 500 - 400 = 100.
    - loop through collection again nad return numeral.
    - add to finalRoman
  - if it's a 9:
  - if it's 0: skip
    - find corresponding 10's numeral, prepend with smaller numeral to subtract. add to roman string.
  - else: find the numereal and add to string.
- move to next number - 2
  - loop through collection. return the numeral that is >= number, or 50: L.
  - if returned number is > current number, get the difference. 50 - 40 = 10;
  - loop over collection and return 10: X.
  - concatenate second numeral and first numeral.
- next number : 1
- */
// [4, 0, 2]
// 263
class RomanNumeral {
  constructor(inputNumber) {
    this.inputNumber = inputNumber;

    this.numerals = {
      1000: 'M',
      500: 'D',
      100: 'C',
      50: 'L',
      10: 'X',
      5: 'V',
      1: 'I'
    };
  }
  toRoman() {
    let finalRoman = [];
    let currentNumber = this.inputNumber;
    let keys = Object.keys(this.numerals).map((key, _) => Number(key)).sort((a,b) => b - a);

    while (currentNumber > 0) {

      for (var i = 0; i < keys.length; i++) {
        if (currentNumber >= keys[i]) {
          if (this.startsWithFour(currentNumber)) {

            finalRoman.push(this.numerals[keys[i]]);
            finalRoman.push(this.numerals[keys[i - 1]]);
            currentNumber -= keys[i - 1] - keys[i];
            break;

          } else if (this.startsWithNine(currentNumber)) {
            finalRoman.push(this.numerals[keys[i + 1]]);
            finalRoman.push(this.numerals[keys[i - 1]]);
            currentNumber -= keys[i - 1] - keys[i + 1];
            break;

          } else {
            finalRoman.push(this.numerals[keys[i]]);
            currentNumber -= keys[i];
            break;
          }
        }
      }
    }
    return finalRoman.join("");
  }

  startsWithFour(currentNumber) {
    return String(currentNumber).split("")[0] === '4';
  }

  startsWithNine(currentNumber) {
    return String(currentNumber).split("")[0] === '9';
  }
}

module.exports = RomanNumeral;
