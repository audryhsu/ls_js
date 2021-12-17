'use strict';
// LS SOLUTION USING SIMPLE CLASS OBJECT & CLASS METHODS
class Diamond {
  static alphabet = 'abcdefghijklmnopqrstuvwqyz'.toUpperCase().split("")
  static SPACE = ' ';
  static NEWLINE = '\n'

  static makeDiamond(inputLetter) {

    let rowIdentation = ''
    let middleSpaces = ''
    let letter;
    let increment = 1;
    let backwardsFlag = false;
    let diamond = '';

    let rowMidpoint = this.getRowMidpoint(inputLetter);

    if (rowMidpoint === 0) {
      return "A\n"
    }

    for (let i = 0; i <= rowMidpoint; i+= increment) {
      rowIdentation = this.SPACE.repeat(rowMidpoint - i);
      middleSpaces = this.SPACE.repeat(this.nextOddNumber(i));
      letter = this.alphabet[i];

      if (i === 0) {
        diamond += this.createARow(rowIdentation);
        if (backwardsFlag) break;
      } else {
        diamond += this.createRow(rowIdentation, letter, middleSpaces)
      }
      //go backwards
      if (i === rowMidpoint) {
        backwardsFlag = true;
        increment = -1;
      }
    }
    return diamond
  }

  static nextOddNumber(rowIdx) {
    if (rowIdx === 0) return 0
    let num = 1;

    for (let i = 0; i < rowIdx - 1; i++) {
      num += 2;
    }
    return num
  }

  static createRow(rowIdentation, letter, middleSpaces) {
    return rowIdentation + letter + middleSpaces + letter + rowIdentation + this.NEWLINE;
  }

  static createARow(rowIdentation) {
    return rowIdentation + 'A' + rowIdentation + this.NEWLINE;
  }

  static getRowMidpoint(inputLetter) {
    return this.alphabet.findIndex(letter => letter === inputLetter.toUpperCase());
  }
}

console.log(Diamond.makeDiamond('B'))
console.log(Diamond.makeDiamond('C'))
console.log(Diamond.makeDiamond('E'))

module.exports = Diamond
