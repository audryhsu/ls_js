// Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.
//
// You may (and should) use the substrings function you wrote in the previous exercise.
//
// For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

//input: string, can contain whitepsace or other symbol delimiter
//output: list of all palindromic substrings of input string
//rule: each substtring is a sequence of chars that reads same forward and backward. Sort substrings in result list by order of appearance in input string.
// dupe substrings are ok.
//examples:
// find all substrings and store in a list.
// filter list for palindromes.
// palindrome is where first char and last char, second char, and second to last char....are identical
// map, filter
// 0, substr.length - 1 ==> 0, 3
// 1, substr.length - 1 - i, ==> 1, 2
//

function palindromes(string) {
  let substrs = substrings(string);
  let pArr = substrs.filter(substr => isPalindrome(substr));
  console.log(pArr);
  return pArr;
}

// instead of if else statements, just return the result of reversing string
function isPalindrome(string) {
  return string.length > 1 && string === string.split("").reverse().join("");
}

function substrings(string) {
  let result = string.split("").map((elem, index) => leadingSubstrings(string.slice(index))).flat();
  // console.log(result);
  return result;
}

function leadingSubstrings(string) {
  return [...string].reduce((array, _, index) => {
    array.push(string.slice(0, index + 1));
    return array;
  }, []);
}

// testing area ////////////////////////////////

// console.log(isPalindrome('madam'));
// console.log(isPalindrome('tt'));
// console.log(isPalindrome('abcd'));
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
