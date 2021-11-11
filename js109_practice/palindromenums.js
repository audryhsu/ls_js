// Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

//input integer positive
// output boolean

// OPTION 1
// function isPalindromicNumber(num) {
//   num = num.toString();
//   let num2 = num.split('').reverse().join('');
//   console.log(num === num2);
//   return num === num2;
// }

//REFACTOR reusing previous functions
function isPalindrome(str) {
  let str2 = str.split('').reverse().join('');
  return str === str2;
}

function isPalindromicNumber(num) {
  console.log(isPalindrome(String(convertInt(num))));
  return isPalindrome(String(convertInt(num)));
}

// further exploration
// Suppose the number argument begins with one or more 0s. Will the solution still work? Why or why not? Is there any way to address this?

function convertInt(str) {
  return parseInt(str, 10);
}

convertInt('0121'); // 121
isPalindromicNumber('0121') // true
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
