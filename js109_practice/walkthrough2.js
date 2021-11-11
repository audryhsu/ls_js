//input: string of letters
//output: boolean value -- true if the input string can be reconstructed by repeated a substring of it (either 1 or more times). False if input string cannot be reconstructed from repated substring.
//ex => abab true. substring 'ab' and repeat twice. len 4
//ex => 'aba'. ab, ba, False len 3
// ex => "aabaaba" false. len 7
// ex => "abaababaab" true. abaab repated. len 10
// ex => abc,abc,abc,abc...len 12. in half?
//edge cases? - always going to be nonempty string of letters.
// substring is at least one char.
//algo:
  //substring - half. compare first half to second half.
  // if they match, then return true.
  //

//aaa => 'a' is a valid substring. // if length is odd, check if letter is repeated.

function repeatedSubstring(string) {
  if (string.length % 2 === 1) {
    let substring = string[0];
    for (var i = 0; i < string.length; i++) {
      if (substring !== string[i + 1]) return false;
    }
    return true;
  }
  else {
    let substring = string.substring(0, string.length / 2);
    if (substring === string.substring(string.length / 2)) return true;
  }
  return false;
}

console.log(repeatedSubstring("abab") === true);
console.log(repeatedSubstring("aba") === false);
console.log(repeatedSubstring("aabaaba") === false);
console.log(repeatedSubstring("abaababaab") === true);
console.log(repeatedSubstring("abcabcabcabc") === true);
