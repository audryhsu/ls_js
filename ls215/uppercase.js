/*
input: string
output: boolean, true if all alpha chars are uppercase
rule: ignore chars that aren't alphabetic.
algo:
- replace all alpha chars with uppercase, then compare the two strings
*/

function isUppercase(string) {
  console.log(string === string.toUpperCase());
}

isUppercase('t');          // false
isUppercase('T');           // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true
