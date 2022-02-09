/*
input: string
output: true, if word can be spelled using given blocks, false otherwise
rule:
- case insensitive for letters and blocks
- block can only be used once
- a block represents two letters of the alphabet
ds:
- nested array [[B,O], [X, K]...]
- return the index of the array, splice it off

algo:
- loop through each letter in input word
  - loop through blocks array
    - for each block, check if block includes input letter
    - if true, get the index of matching block and splice from blocks array
    - else, return false
*/
const BLOCKS = [
  ['B','O'],['X','K'],
  ['D','Q'],
  ['C','P'],
  ['N','A'],
  ['G','T'],['R','E'],
  ['F','S'], ['J','W'], ['H','U'],
  ['V','I'], ['L','Y'], ['Z','M']
];

function isBlockWord(string) {
  if (string === "" || string === " ") return false;

  let letters = string.split('').map(letter => letter.toUpperCase());
  let found;

  for (let i = 0; i < letters.length; i++) {
    found = false;
    debugger;

    for (let j = 0; j < BLOCKS.length; j++) {
      // console.log("starting blocks loop!");
      if (BLOCKS[j].includes(letters[i])) {
        BLOCKS.splice(j, 1);
        found = true;
        // console.log("Letter " + letters[i] + " was found!");

        break;
      }
    }
    debugger;
    if (!found) {
      console.log("if found, this shouldn't be logged");
      console.log('false');
      return false;
    }
  }
  console.log('true');
  return true;
}

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
