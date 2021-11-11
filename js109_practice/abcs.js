
//input: string word
//output: boolean true or false
//rule: if word can be spelled by using each block only ONCe, then return true. else return false.
  // case insensitive
  // input string contains any two letters from same block == false.
  // if a block is used more than once .e.g repeated letters == false;
//algo: keep track of which blocks have been used in an array
// split the string word and evaluate each letter one by one.
  // for a given letter, find the corresponding block.
    // if block hasn't been used, mark the block used in usedBlocks array.
    // otherwise, return false.
    // once loop finishes, return true;

const BLOCKS = {
  1: ['B', 'O'],
  2: ['X', 'K'],
  3: ['D', 'Q'],
  4: ['C', 'P'],
  5: ['N', 'A'],
  6: ['G','T'],
  7: ['R','E'],
  8: ['F','S'],
  9: ['J', 'W'],
  10: ['H', 'U'],
  11: ['V', 'I'],
  12: ['L', 'Y'],
  13: ['Z', 'M']
}
const usedBlocks = [];

function isBlockWord(string) {
  let letters = string.toUpperCase().split("");
  for (var i = 0; i < letters.length; i++) {
    // get block number of letter block.
    for (let prop in BLOCKS) {
      if (BLOCKS[prop].includes(letters[i])) {
        if (usedBlocks.includes(prop)) {
          return false;
        } else {
          usedBlocks.push(prop);
        }
      }
    }
  }
  return true;
}


// let result = isBlockWord('BATCH');      // true
// let result = isBlockWord('BUTCH');      // false
// let result = isBlockWord('jest');       // true
// let result = isBlockWord('floW');       // true
// let result = isBlockWord('APPLE');      // false
// let result = isBlockWord('apple');      // false
// let result = isBlockWord('apPLE');      // false
let result = isBlockWord('Box');        // false

console.log(result);
