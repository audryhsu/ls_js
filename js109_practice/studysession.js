//1
//Problem Description
// Given the string of alphabetic characters limited to a-z, do as in the sample cases.

// Each character in the string argument should appear in the returned string.
// The original character should be repeated as many times as its original position in the string argument. (index 0 being position 1, index 1 being position 2...)
// The repeated sequences of a character should be separated by a hyphen in the returned string.
// In the repeated sequences of a character included in the returned string, the first instance of the character should be upper-case.  Subsequent instances of the character should be lowercase.

//input: string of alphacharacters (upper and lower cased )
//output: return a string, concatenated with hyphens
//rule: each char in input string will be repeated by n times, where n is the char's index position + 1.
  // separate each string of repeated chars by a hyphens
  // first char should be uppercased in the repeated sequence. the rest should be lowercased.
//ds - array to hold the repeated sequences of chars
//algo: for each char in input string:
  // repeatedSTring = repeated char by i
    // char.toUpperCase() + repeatedString
    // push to result Array
    // join array on hypen
function accum(string) {
  let result = string.split("").map((char, index) => {
    return char.toUpperCase() + char.toLowerCase.repeat(index);
  });
  return result.join("-");
}

// Test Cases
console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"
