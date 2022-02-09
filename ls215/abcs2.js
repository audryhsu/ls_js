/*
requirements:
- cannot use a block more than once (word can't have 'b' and 'o')
- cannot reuse letters ('o' 'o' in 'cook')
- case insensitive

ds:
- blocks are a string

algo:
- for each letter in input string, loop through blocks
  - check if letter appears in "used" blocks array. if yes, return false.
  - if block str includes letter
  - add block str to "used" blocks array

*/

const BLOCKS = [
  'BO','XK',  'DQ', 'CP',
  'NA',  'GT','RE',
  'FS', 'JW', 'HU',
  'VI', 'LY', 'ZM'
];

function isBlockWord(string) {
  let letters = string.toUpperCase().split('');
  let used = '';

  for (let i = 0; i < letters.length; i++) {
    if (used.indexOf(letters[i]) !== -1) return false;

    let blockLetters = BLOCKS.filter(block => block.indexOf(letters[i]) > 0)[0];
    used += blockLetters;
  }
  return true;

}
console.log(
  isBlockWord('BATCH') === true,
  isBlockWord('BUTCH') === false,
  isBlockWord('jest') === true,
  isBlockWord('book') === false,
  isBlockWord('cook') === false,
);
