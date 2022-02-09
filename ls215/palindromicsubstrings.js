/*
Write a function that returns a list of all substrings of a string that are palindromic. That is, each substring must consist of the same sequence of characters forwards as backwards. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.
*/

/*
p: given a string, find substrings, and then find which are palindromic.
- palindrome = sequence of chars forwards and backwards are the same
  - len > 1

input: string
- whitespace ignored
-
output: array of palindrome substring, sorted by their order of appearance in input string.
- if no palindromes found, return an empty array
rule:
- order matters, assess substring left to right
- array can have duplicate substrings
- all chars considered, including special chars, numbers, etc.
- case sensitive!

algo:
- for each char in the string,
  - get all substrings that start with current char
    - slice the input string based on current char's index
  - for each substring, filter out any that aren't palindromes
  - concat palindrome substrings to final array

*/
function palindromes(string) {

  return substrings(string)
    .flatMap(substrArr =>
              substrArr.filter(substring => isPalindrome(substring))
    .filter(palindrome => palindrome.length > 1)
}

function substrings(string) {
  let leadingIndex = 0;
  let allSubs = [];
  for (let i = 0; i < string.length; i++) {
    let subs = string.split('').flatMap((item, i, array) => array.slice(leadingIndex, leadingIndex + i + 1).join(''));

    subs = subs.filter((elem, i, arr) => arr.indexOf(elem) === i);
    allSubs.push(subs);
    leadingIndex += 1;
  }

  return allSubs;
}

function isPalindrome(string) {
  return string.split('').reverse().join('') === string;
}

// palindromes('abcd');       // []
// palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// // // returns [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada", "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did", "-madam-", "madam", "ada", "oo" ]
// //
palindromes('knitting cassettes');
// // // returns // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
palindromes('AbcbA')
palindromes('Abcba')
palindromes('Abc-bA')
palindromes('00!!001')

function leadingSubstrings(string) {
  return string.split('').flatMap((item, i, array) => array.slice(0, i+1).join(''))
}
