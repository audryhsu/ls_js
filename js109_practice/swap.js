
//input - string of words separated by spaces
//out - string with first and last letters of every word swapped
// no trailing/leading spaces, all alphabetic letters

//rule - if one letter, return letter
// split string into array of words
//for each word, create a new string
  // example: what
  // string length is 5
  // slice string from second letter up to last letter


function swap(string) {
  if (string.length === 1) return string;

  let wordsArray = string.split(' ');
  let result = [];
  wordsArray.forEach((word, i) => {
    let slice = word.slice(1, word.length - 1);
    if (word.length > 1) {
      result.push(word[word.length - 1] + slice + word[0]);
    } else {
      result.push(word);
    }
  });
  return result.join(' ');
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
swap('I am a cat');                              //
