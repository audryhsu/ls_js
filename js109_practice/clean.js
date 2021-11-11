// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).


// in - string
// out - string
// no consectuvie spaces
// remove or filter out non-alpha chars and replace with space

//algo - loop through the string
// if char is alphabetic, add it to clean string
// if not alphabetic
  // check if last char in clean string is a space
  //if not, add a space
  // else, continue loop
//return clean string

// #2 using for loops
// function cleanUp(str) {
//   let cleanStr = '';
//   for (var i = 0; i < str.length; i++) {
//     if (isAlphabetic(str[i])) cleanStr += str[i];
//
//     // Key: input str and cleanStr do not have the same indicies
//     else if (cleanStr[cleanStr.length - 1] !== ' ') cleanStr += ' ';
//   }
//   console.log(cleanStr);
// }
//
// function isAlphabetic(char) {
//   return ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z"));
// }

// #1 using regex solutions
// the + sign will treat consecutive nonalpha characters as a single match, so only one whitespace will replace
function cleanUp(str) {
  let nonalpha = /[^a-z]+/ig;
  console.log(str.replace(nonalpha, " "));
}
// console.log(str.replace(/[^\w\s]+/g, " ").replace(/\s+/g, " "));

cleanUp("---what's my +*& line?");    // " what s my line "
