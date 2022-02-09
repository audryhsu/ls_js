/*
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

Copy Code
plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!
Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').


p: series of caesar ciphers based on letters of a 'keyowrd '
- shift value used for a letter === index value in alphabet.
- 'a' - 'z' --> 0 - 25
- A-Z --> also 0 - 25
- pplay cipher sequentially for each char by applying shift value to C cipher
- nonalpha chars remain unchanged
Questions:
- what if plaintext isn't evenly divisible by keyword?
  -- assumption: this is valid
/*
input: plaintext string of words and a keyword
- valid input: string of letters and punctuation
  - digits? return unchanged if in plaintext, but not valid in keyword
  - '' invalid
  -
output: cipher text in a string
rule:
- keyword is case insesitive, and index value of each letter in keyword corresponds to shift value for plaintext letter in same index position
- shift value is index location of keyword letter, 0 indexed
- shift value will "wrap" around 25. 25 is the greatest value
- preserving white space of plaintext and echo special chars

ds:
- arrays - map
- looping through plaintext chars
- looping through keyword letters

algo:
- validate input string and input keyword
- build a new string via array to be joined later
- loop through the plain text, preserving spaces and preserving case
  - for each letter,
    - get index position of current letter (lowercased)
    - get shift value of current cipher letter
    - add index values of current letter + shift value % 25
    - get letter from alphabet array based on new index
    - add it to the string
  - if nonalpha (spaces, punctuation)
    - add the char as is. Do not allocate a cipher letter to these.
*/
const tabula = 'abcdefghijklmnopqrstuvwqyz'.split('');

function encode(plaintext, keyword) {
  if (!validInputs(plaintext, keyword)) return null;

  //loop through shift values for every plaintext letter
  let shiftValues = createShiftArray(keyword);
  let shiftIndex = 0;

  let ciphertext = plaintext.split('').map((char, i) => {
    if (!isAlphaChar(char)) {
      return char;
    }

    let currentTabIndex = getIndex(char);

    let newIndex = currentTabIndex + shiftValues[shiftIndex];

    // console.log("Shift index", shiftValues[shiftIndex]);
    if (newIndex > 25) {
      newIndex = (newIndex % 25) - 1;
    }
    // console.log("tabula lookup", tabula[newIndex])

    shiftIndex = (shiftIndex + 1) % shiftValues.length; //increment to loop through shift values array
    // if (shiftIndex === shiftValues.length) shiftIndex = 0; //reset loop

    if (char === char.toLowerCase()) {
      return tabula[newIndex].toLowerCase();
    }
    return tabula[newIndex].toUpperCase();

  });
  return ciphertext.join('');

}
function getIndex(letter) {
  letter = letter.toLowerCase();
  return tabula.indexOf(letter);
}
function createShiftArray(keyword) {
  let shiftValues = keyword.split('').map((letter, index) => {
    return getIndex(letter);
  });
  return shiftValues;
}

function isAlphaChar(char) {
  let re = new RegExp(/[A-Za-z]/, 'i');
  return re.test(char);
}

function validInputs(plaintext, keyword) {
  if (!plaintext || !keyword || plaintext === '' || keyword === '' || !(typeof plaintext === 'string')) return null;
  let re = new RegExp(/[^A-Za-z]+/, 'g' );
  if (re.test(keyword)) return null;

  return true;
}

console.log(encode("Pineapples don't go on pizzas!", 'meat'));
console.log(encode("Pineapples don't go on pizzas!", 'meat') === "Bmnxmtpeqw dhz'x gh ar pbldal!");
console.log(encode("0ineapples don't go on pizzas!", 'meat') === "0mnxmtpeqw dhz'x gh ar pbldal!");
console.log(encode("0ineapples don't go on pizzas!", ' ') === null);
console.log(encode(" ", 'meat') === ' ');
console.log(encode("", 'meat') === null);
console.log(encode(['Pineapples'], 'meat') === null);
console.log(encode(['Pineapples'], '@#$^302') === null);
