/*
input: two strings

String validation:
- assuming both are strings
- empty string --> valid, use the empty string as the shortest string
- digits, treat them like strings
-trailing white spaces are valid
output: short long short pattern concatenated, no delimiter
rule:
- identify shorter and longer string via length
algo:
- validate input strings, if invalid, return null;
- compare length of both strings to find shorters one
- concat shorter one, longer, shorter
*/

function shortLongShort(str1, str2) {
  if (typeof str1 !== 'string') return null;
  if (typeof str2 !== 'string') return null;

  let short, long;
  if (str1.length < str2.length) {
    short = str1;
    long = str2;
  } else {
    short = str2;
    long = str1;
  }
  console.log(short + long + short);
}
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
