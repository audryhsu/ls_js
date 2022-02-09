/*
input: string
- letters, numbers, empty strs, characters, whitespace
output: an object with three properties: num lowercase, num uppercase, num chars neither
rule:
algo:
- use regex to match each char that is lowercase in an array, get length
- repeat above for upper case and non letter chars
- return object with the counts
*/

function letterCaseCount(string) {

  let l = string.match(/[a-z]/g) || [];
  let u = string.match(/[A-Z]/g) || [];
  let n = string.match(/[^a-zA-Z]/g) || [];


  let counts = {
    lowercase: l.length,
    uppercase: u.length,
    neither: n.length
  };
  console.log(counts);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
