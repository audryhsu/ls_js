// This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

//rule: case insensitive -- change to all lowercase
// rule: ignore non alpha...use filter to return only alpha characters

function cleanString(str) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz123456789'.split('');
  str = str.toLowerCase().split('');
  let newStr = str.filter(char => alpha.includes(char)).join('');
  return newStr
}

function isRealPalindrome(str) {
  str = cleanRegex(str);
  let str2 = str.split('').reverse().join('');
  return str === str2;
}

// REFACTOR USING REGEX
function cleanRegex(str) {
  newStr = str.toLowerCase().replace(/\W/gi, '');
  return newStr

}

console.log(
isRealPalindrome('madam'));               // true
console.log(
isRealPalindrome('Madam'));               // true (case does not matter)
console.log(
isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(
isRealPalindrome('356653'));              // true
console.log(
isRealPalindrome('356a653'));             // true
console.log(
isRealPalindrome('123ab321'));            // false
