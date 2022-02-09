function removeVowels(array) {
  let result = array.map((str, _) => str.replace(/[aeiou]/gi, ''));
  console.log(result);
}
/*
input: array of strings
output: array of same string values, but removing all vowels
rule:
algo:
- loop through array
  - replace vowels for each string and return it
*/


removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
