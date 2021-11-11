// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

//input string
//output string
// rule - do not double vowels , digits, punctuation, or whitespace
// chec kfi it's between aZ ranges, if yes, double, if not, return just the char

function doubleConsonants(str) {

  let arr = str.split("");
  let result = arr.map(char => {
    if (isConsonant(char)) return char + char;
    else return char;
  }).join("");
  console.log(result);
}

function isConsonant(char) {
  const CONSONANTS = 'bcdfghjklmnpqrstvwxyz'.split("")
  return CONSONANTS.includes(char.toLowerCase());

}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
