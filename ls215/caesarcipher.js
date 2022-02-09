/*
Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

p: implementing a cipher, substitution
- each letter in plaintext is substituted by letter located a given number of positions away in the alphabet.
- shift value is key, to encode and decode text
- only encrypts letters (upper and lower)
- any nonletter left as is
- preserve case as original letter
- wrap around to beginning of alphabet
input: string of plaintext, shift value key
  - plaintext can contain any chars, but only letters get encoded
output: encoded string
algo:
- iterate over string chars
- check if letter char
  - if yes, encode by shift value and case
  - else, return char

encode() - get the index of the letter from alphabet array
  - add shift value to i value
  - get letter at new indx position
  - return
*/

function caesarEncrypt(plaintext, key) {
  if (typeof plaintext !== 'string') return null;

  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lower = 'abcdefghijklmnopqrstuvwxyz';

  let cipher = plaintext.split('').map((char, i) => {
    if (char.match(/[A-Z]/)) {
      let newIndex = (upper.indexOf(char) + key) % 26;

      return upper[newIndex];
    } else if (char.match(/[a-z]/)) {
      let newIndex = (lower.indexOf(char) + key) % 26;
      if (newIndex < 0) newIndex = 0;
      return lower[newIndex];
    } else {
      return char;
    }
  }).join('');

  console.log(cipher);
  return cipher;

}

// simple shift
console.log(
// caesarEncrypt('A', 0)==='A',       // "A"
// caesarEncrypt('A', 3) ==='D',     // "D"
// caesarEncrypt('10', 3) === '10', // "D"
// caesarEncrypt(10, 3) === null,

  // wrap around
  // caesarEncrypt('y', 5) === 'd',       // "d"
  // caesarEncrypt('a', 47) === "v",
  caesarEncrypt('Z', 25) === "Y",
  // all letters
  caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === "ZABCDEFGHIJKLMNOPQRSTUVWXY",
  caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!",
  // // many non-letters
  caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
);
