/*

input: letter
output: diamond shape
rule:
- given a litter, prints a diamond starg with 'A' as first and last row.
- input letter at the widest point.
- top half diamond goes in ascending order starting from A to input letter
  - stops at input letter (largest width) at the middle row
  - after middle row, letters go in descending order

things to track:
- row number going towards the middle
  - top half of diamond: indentation decreasing, gap space increasing, rowCounter increasing
- letter corresponding to the row  -- indx location of the inputnumber is number of rows * 2
- identation spaces from the left
- spaces between letters

ds: array for idx mapping of the letters to determine number of rows to create for top half of the diamond

algo:
- first/last row: rowIdentation + 'A' + rowIdentation;
- row: rowIdentation + letter + middleSpaces + letter + rowIdentation + new line
- rowIdentation -- startIdentation === rowMidpoint index. decrement by one towards midpoint.
- middleSpaces -- starts at 0. increments by next odd number.

 for each rowIdxs:
 - declare diamond object.
 - calculate rowIdentation & middleSpaces.
 - if rowIdx === 0,
  - return createARow

Objects:
- Diamond object with makeDiamond method ( input letter )
*/
// USING IIFE TO CREATE PRIVATE FUNCTIONS AND RETURN DIAMOND OBJECT WITH MAKE DIAMOND METHOD

'use strict';
let Diamond = (() => {
  const alphabet = 'abcdefghijklmnopqrstuvwqyz'.toUpperCase().split("");
  const SPACE = ' ';
  const NEWLINE = '\n';

  function nextOddNumber(rowIdx) {
    if (rowIdx === 0) return 0;
    let num = 1;

    for (let i = 0; i < rowIdx - 1; i++) {
      num += 2;
    }
    return num;
  }

  function createRow(rowIdentation, letter, middleSpaces) {
    return rowIdentation + letter + middleSpaces + letter + rowIdentation + NEWLINE;
  }

  function createARow(rowIdentation) {
    return rowIdentation + 'A' + rowIdentation + NEWLINE;
  }

  function getRowMidpoint(inputLetter) {
    return alphabet.findIndex(letter => letter === inputLetter.toUpperCase());
  }

  return {
    makeDiamond(inputLetter) {
      let rowIdentation = '';
      let middleSpaces = '';
      let letter;
      let increment = 1;
      let backwardsFlag = false;
      let diamond = '';
      let rowMidpoint = getRowMidpoint(inputLetter);

      if (rowMidpoint === 0) {
        return "A\n";
      }

      for (let i = 0; i <= rowMidpoint; i += increment) {
        rowIdentation = SPACE.repeat(rowMidpoint - i);
        middleSpaces = SPACE.repeat(nextOddNumber(i));
        letter = alphabet[i];

        if (i === 0) {
          diamond += createARow(rowIdentation);
          if (backwardsFlag) break;
        } else {
          diamond += createRow(rowIdentation, letter, middleSpaces);
        }

        //go backwards
        if (i === rowMidpoint) {
          backwardsFlag = true;
          increment = -1;
        }
      }
      return diamond;
    }
  };
})();

console.log(Diamond.makeDiamond('B'));
console.log(Diamond.makeDiamond('C'));
console.log(Diamond.makeDiamond('E'));

module.exports = Diamond;
