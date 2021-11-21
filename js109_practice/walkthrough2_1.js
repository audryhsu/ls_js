// Given an array of strings from lowercase letters, return an array of all letters that show up in all strings in given array.

//input: array containing strings of letters
//output: return an ARRAY, contianing all of the chars that show up in all strings of input array. including duplicates.
  // if not matching chars, return an empty array.
//rule: if a char is repeated multiple times in each element of array, include the char in output array for the n times it's present.
//algo: start with first word in input array and compare to letters in remaining words in input array.
// ds - original input array
// first word -- array of letters
  // proceeding words to check -- array of letters
  // loop thorugh each char in first word in  input array

    // loop through each char in first word
      // loop through each letter in  proceeding words from copied input array
        // if char === char,
        // foundFlag += 1;
        // stop searching for char in current word, move to next word
    // go to word + 2 in input array and repeat
    //once done iterating through input array of words and their letters,
    // if foundFlag === input Array.length - 1, then consider global match.
      // if found in all words, push current char to result array.

function commonChars(inputArray) {
  arrCopy = inputArray.slice();
  let result = [];
  let matchTarget = inputArray.length - 1;
  let lettersArr = arrCopy[0].split(" ");
  for (let i = 0; i < lettersArr.length; i++ ) { //iterate through "bella" letters
    let matchCount = 0;

    for (let k = 1; k < arrCopy.length; k++) { // iterate through inptu array, next word 'label'
      let checkLettersArr = arrCopy[k].split("");

      for (let j = 0; j < checkLettersArr.length; j++) { // iterate through proceeding word's letters
        if (lettersArr[i] === checkLettersArr[i]) {
          matchCount += 1;
          console.log(`Match found: ${checkLettersArr[i]}`);
          delete checkLettersArr[i];
          break;
        }
      }
    }
    if (matchCount === matchTarget) result.push(lettersArr[i]);
  }
  console.log();
}

console.log(commonChars(['a','b'])); // []
console.log(commonChars(['ab','bc'])); // ['b']
console.log(commonChars(['bella', 'label', 'roller'])); // ['e','l','l']
console.log(commonChars(['cool', 'lock', 'cook'])); // ['c','o']
console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o']
console.log(commonChars(['aabaa', 'ccccddd', 'eeef', 'ggghhh''])); // []
