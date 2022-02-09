/*
p: cipher that encodes and decodes
 - message is contained on successive "rails", a rail can be represented by a row
 - the first letter of the message is on first rail
 - the second letter of the message is on the second rail...so on , off set by one column

- encode a plaintext message and create the cipher 'map', log output
  - validate a plaintext message as a string
  - generate the cipher map with letters in zig zag shape
  - each letter of message is alternating rails
ds:
[
  row0 [col0, col1...],
  row1 [col0...]
}
- row or "rail" --> outer array will have n rails rows
- each row will have  c columns --> cleaned input string length

- left padding
- right padding
input: string input that represents a message, number of rails
-
output:
- encoded messaging on cipher fence

rule:
- n rows, 2n - 1 columns to complete one zigzag
- 1 letter per column
- length of letters excluding white space == total number of columns
- row index === leftpad, both increment by one
- right pad starts at (n * 2) - 3, then decrements by 2
algo:
- santize plaintext
  - must be string
  - cannot be ''
  - remove whitespace
  - convert to all capital letters
  - number of letters in the string > num rails
    - given n rails, number of letters >= 2n - 1
  - num rails must be >=2
    - nrails must be a number. if it's a string version of a valid nuimber, accept
    - array, object, null, '', undefined, Infinity...invalid and output null;
  - return an array of letters
- initialize the cipher map
  - create cipherMap array with n nested arrays that represent rows .
  - for each row array, fill it in with '.' repeated c times, one period for each column
Replace placeholders with message letters
- for each row, i --> structure the loop in a way that we can loop forward, then once we reach n, loop back down to zero
  - loop through each row in cipherMap
    - for each row, replace placeholder at index location col with letter at location col;

  - go to next row until you reach n
  - once you reach n row (last row), traverse back up by going back to previous row up until row 0.
Restart the loop over rows, but keep col counter up through message.length
*/

function encode(plaintext, nRails) {
  let textLetters = sanitizePlainText(plaintext);
  let numRows = validateRails(textLetters, nRails);
  if (!textLetters || !numRows) return null;

  let maxCols = textLetters.length;
  let col = 0;
  let cMap = initializeCipherMap(numRows, maxCols);

  while (col <= maxCols) {

    let incrementer = 1;
    for (let i = 0; i < cMap.length; i += incrementer) {
      if (incrementer === -1 && i === 0) {
        break; // stop before reaching index 0
      }

      cMap[i][col] = textLetters[col];
      col += 1;

      if (i === cMap.length - 1) incrementer = -1; // loop backwards
    }
  }

  // cMap.forEach((row, i) => {
  //   console.log(`Row ${i}: ${row.join(' ')}`);
  // });
  return cMap;
}

let cipher = encode('WE ARE DISCOVERED FLEE AT ONCE', 4);
console.log(decode(cipher));


function decode(cipher) {
  let totalCols = cipher[0].length;
  let col = 0;
  let decodedStr = '';

  while (col < totalCols - 1) {
    let increment = 1;
    for (let i = 0; i < cipher.length; i += increment) {
      if (increment === -1 && i === 0) {
        break; // stop before reaching index 0
      }
      decodedStr += cipher[i][col];
      col += 1;

      if (i === cipher.length - 1) increment = -1; // loop backwards
    }

  }
  decodedStr += cipher[0][totalCols - 1];
  return decodedStr;
}


/*
/*
input: cipher map with n rows
output: strings of letters rep message
rule:
- loop from row 0 to row n...then once at row n, iterate backwards in the loop to n-1
- iterate over c columns === length of one of the subarrays
- each time loop to next row, +1 column
- store the element found and build the decodedStr
algo:
*/

function initializeCipherMap(nRails, nColumns) {
  let array = [];
  for (let i = 0; i < nRails; i++) {
    let row = '.'.repeat(nColumns).split('');
    array.push(row);
  }
  return array;
}

function sanitizePlainText(string) {
  if (typeof string !== 'string' || string === '') return null;
  return string.split(' ').join('').toUpperCase();
}

function validateRails(textLetters, number) {
  number = Number(number);
  if (!textLetters) return null;
  if (typeof number !== 'number' || typeof number === 'NaN' || number <= 1) {
    return null;
  }
  if (textLetters.length < (2 * number - 1)) {
    return null;
  }
  return number;
}

// console.log(encode('WE are DISCOVERED FLEE AT ONCE', 3) !== null);
console.log(encode('WE ARE DISCOVERED FLEE AT ONCE', 4) !== null);
// console.log(encode('WE ARE DISC0VERED FLEE AT ONCE', '2') !== null);
// console.log(encode('WE ARE DISC0VERED FLEE AT ONCE', 8) !== null);
// console.log(encode('', 2) === null);
// console.log(encode('cat', 3) === null);
// console.log(encode('cat', 3) === null);
// console.log(encode('catBOOM', 1) === null);
// console.log(encode('catBOOM', '') === null);
// console.log(encode('catBOOM', undefined) === null);
// console.log(encode(undefined, 100) === null);

// 3, rows, 5 columns to zigzag
// - message is 25 chars long (excluding whitespace)
// - row 0, 0 col, 3 right pad
// - row 1, 1 col, 1 right pad
// - row 2, 2 col, 0 right pad
// - go back to row 1, 3 until but not including 0
// - row 0, col 4
//
// 4 rows, 7 columns
// - each zigzag, covered 7 letters
// - row 0, 0 left pad, 5 right pad
// - row 1, 1 left pad, 3 right pad
// - row 2, 2 left pad, 1 right pad
// - row 3, 3 left pad, 0 right pad
// -
// W . . . . . I . . . . . R . . . . . E . . . . . E
// . E . . . D . S . . . E . E . . . E . A . . . C .
// . . A . E . . . C . V . . . D . L . . . T . N . .
// . . . R . . . . . O . . . . . F . . . . . O . . .
//
// 2 ROWS, 3 columns
// - right pad starts at 1
// W . A . E . D . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
