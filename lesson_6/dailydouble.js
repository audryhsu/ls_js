// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.
//
// Examples:
// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

//input -- string
// return -- new string
// condition: contains value of iriginal string with all consecutive duplicate characters collapsed into single char
// characters must be consecutive -- digits and strings both
// if input string is empty, return empty string
// assume valid string input
// should work for symbols too ?!/
// if the char is a space, then add it to the array

// data structure -- list, since order matters

// algo
// create a new array to store the resulting chars
// analyze each char of the string by splitting into array
// add char at index 0 to result array
// starting at index 0
// check if the element at the next index location is the same as current element
  // if chars are the same, look at next char
  // repeat until a new char appears
// if current char and next charr are different,
// push next char to the result Array
// iterate to index locatioin of said char as the new current char

/*
function crunch(string) {
  if (!string.split('').length) return "";

  let resultArr = [];
  let charArr = string.split('');
  charArr.forEach((char, i) => {
    if (i === 0) resultArr.push(char);
    if (char !== charArr[i + 1]) resultArr.push(charArr[i + 1]);
  });
  resultArr.pop();
  return resultArr.join('');
}
*/

// Solution without using arrays
function crunch(string) {
  let index = 0;
  let result = "";

  while (index < string.length) {
    if (string[index] !== string[index + 1]) {
      result += string[index];
    }
    index += 1;
  }
  return result;
}

// function crunch(text) {
//   let index = 0;
//   let crunchText = '';
//
//   while (index <= text.length - 1) {
//     if (text[index] !== text[index + 1]) {
//       crunchText += text[index];
//     }
//     index += 1;
//   }
//   return crunchText;
// }

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
