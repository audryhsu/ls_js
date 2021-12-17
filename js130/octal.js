/*
input: octal string input
- validation:
output: decimal output -- number ?
- if invalid input, return 0;
rule:
algo:
given an octal number, split and reverse it.

i=0
digit / 8^n + ...
i = 1;
digit / 8^i +...
*/

class Octal {
  constructor(strOctal) {
    this.strOctal = strOctal;
  }

  _isValidInput(inputStr) {
    if (inputStr.indexOf('8') !== -1 || inputStr.indexOf('9') !== -1) return false;

    return inputStr.split("").every(char => {
      char = char.toLowerCase();
      return char.charCodeAt() >= 48 && char.charCodeAt() <= 57;
    });
  }
  toDecimal() {
    if (!this._isValidInput(this.strOctal)) return 0;
    let sum = 0;
    let octNumArray = this.strOctal.split("").reverse();
    let BASE = 8;

    for (var i = 0; i < octNumArray.length; i++) {
      sum += Number(octNumArray[i]) * Math.pow(BASE, i);
    }

    console.log(sum);
    return sum;
  }

}

let octal = new Octal('10');
octal.toDecimal();

module.exports = Octal;
