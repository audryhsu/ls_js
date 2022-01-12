/*
input: text string
output: encrypted version
rule:
- replace letter inputstring with another letter
- replace each letter with another letter that is 13 positions away from original letter
  - if the letter has alpha index position 14 - 26 inclusive, then replace original letter with letter 13 positions BACKWARDS
- ignores whitespaces
- case does matter... if it's uppercase, the cipher returns an uppercase.
- if it's lowercase, cipher returns same case
- numbers are ignored in cipher
- punctuation is ignored in Cipher

algo:
- create a Cipher class
  - encode method

given a string, loop through each char:
  - if char is punctuation or space, continue to next char
  - get idx position of inputChar and determine whether to go forward or backwards
    - if less than 14, newCharIdx = inputCharIdx + 13
    - if inputCharIdx >= 14, newCharIdx = inputCharIdx - 13
  - calculate newCharIdx based on forwa/backward movement.
  - get corresponding letter from alphabet string and add it to cipherStr;

*/

class Cipher {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static encode(inputStr) {
    let cipherStr = '';
    let charIdx;
    let cipherCharIdx;
    let cipherChar;

    for (let idx = 0; idx < inputStr.length; idx++) {

      if (!this.isLetter(inputStr[idx])) {
        cipherStr += inputStr[idx];

      } else {
        charIdx = this.getCharIndex(inputStr[idx]);
        cipherCharIdx = this.getCipherCharIndex(charIdx);
        cipherChar = this.alphabet[cipherCharIdx];

        if (inputStr[idx] === inputStr[idx].toLowerCase()) {
          cipherChar = cipherChar.toLowerCase();
        }
        cipherStr += cipherChar;
      }
    }
    return cipherStr;
  }

  static getCipherCharIndex(charIdx) {
    const positions = 13;
    if (charIdx >= 13) {
      return charIdx - positions;
    } else {
      return charIdx + positions;
    }
  }

  static getCharIndex(char) {
    char = char.toUpperCase();
    return this.alphabet.indexOf(char);
  }

  static isLetter(char) {
    return this.alphabet.split("").includes(char.toUpperCase());
  }
}

module.exports = Cipher;
