// In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'.

// Example:
// input - string
// return - object, keys for each object are the lower case letters.
// values in the object is the count

// edge cases
// no lower case letters, return an empty object
// assume valid string as input

// data structure
// object to store the lower case letters and counts as values

// algorithm
// create result object
// analyze the string character by character -- split it into an array and filter for lowercase letters only
// iterate through  charArr and add each char to the object, if not already a key in the object
  // set value = 1 when it's added to object for first time
// if char is already in the object, increment value of the key by one
// if not lower case, move to next char

function letter_count(string) {
  let charArr = string.split("").filter(char => 'abcdefghijklmnopqrstuvwxyz'.includes(char))
  console.log(charArr);
  let counts = {};
  charArr.forEach((char, i) => {
    if (!counts[char]) counts[char] = 1;
    else {
      counts[char] += 1;
    }
  });
  return counts;

}

console.log(letter_count('Arithmetics!!0')); //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

//
// function letter_count(string) {
//   arrayOfLetters = string.split('').filter(letter => 'abcdefghijklmnopqrstuvwxyz'.includes(letter));
//   let letterObject = {};
//   arrayOfLetters.forEach(letter => {
//     if (!letterObject[letter]) {
//       letterObject[letter] = 1;
//     } else {
//       letterObject[letter] += 1;
//     }
//   });
//   return letterObject;
// }
