/*
Refactored solution
-- for each word, conver to lowercase, split to letters, sort alphabeticallly, then rejoin the string and compare to myString.
- if the values are equal, it's an anagram.
- it is easier to compare string primitives than it is to check for deep equality between arrays!
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

    wordsArray = wordsArray.filter(word => word.length === this.myString.length).filter(word => !this.isIdentical(word));

    wordsArray.forEach((word, i) => {
      if (word.toLowerCase().split("").sort().join("") === myArray.join("")) anagrams.push(word);
    });

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
