/*
input:
output:
rule: anagram uses each letter exactly once
- case insensitive
- must be exact same length and all letter used exactly concatenate
- if no anagrams, return an empty list
algo:
 - split mystring and compared strings int o sorted arrays. compare letter for letter if they match;

 - loop thorugh the arrays
 - for each word, split into letters,
    compare letters
*/
"use strict";

class Anagram {
  constructor(myString) {
    this.myString = myString;
  }
  match(wordsArray) {
    let anagrams = [];
    let myArray = this.myString.toLowerCase()
      .split("")
      .sort();

    wordsArray = wordsArray.filter(word => word.length === this.myString.length);

    // break each word into an array of lowercase letters, sorted
    for (var i = 0; i < wordsArray.length; i++) {
      if (this.isIdentical(wordsArray[i])) continue;
      let wordArray = wordsArray[i].toLowerCase()
        .split("")
        .sort();

      for (var letter = 0; letter < wordArray.length; letter++) {
        if (letter === wordArray.length - 1) {
          if (myArray[letter] === wordArray[letter]) anagrams.push(wordsArray[i]);
        }
        if (myArray[letter] !== wordArray[letter]) {
          break;
        }
      }
    }
    console.log(anagrams);
    return anagrams;
  }
  isIdentical(word) {
    return this.myString.toLowerCase() === word.toLowerCase();
  }
}
let detector = new Anagram('listen');
detector.match(['Enlists', 'google', 'inlets', 'banana']);
module.exports = Anagram;
