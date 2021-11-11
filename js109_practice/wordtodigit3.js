//input: sentence string
//output: string with every occurence of a "number word" converted to digit character
//rule: any word that represents a number must be converted to a digit
  // four at the end has punctuation on it, if split on spaces.
//algo: loop through all number words, and replace instances of them with their digit.

let numWords = 'zero,one,two,three,four,five,six,seven,eight,nine'.split(",");
// function wordToDigit(string) {
//     numWords.forEach((numWord, i) => {
//       let regex = RegExp(numWord, "gi");
//       string = string.replace(regex, i);
//     });
//     return string;
// }

// >> STRING TRANSFORMATION >>
function wordToDigit(string) {
  let result = string.split(" ").map((word, index) => {
    let puncFlag = false;
    if (word.endsWith(".")) {
      word = word.replace(/\W/g, "");
      console.log(`replaced word: ${word}`);
      puncFlag = true;
    }
    if (numWords.includes(word.toLowerCase())) { ///this doesn't pick up "four."
      if (puncFlag) return `${numWords.indexOf(word.toLowerCase())}.`;
      return numWords.indexOf(word.toLowerCase());
    } else {
      if (puncFlag) return `${word}.`
      return word;
    }
  });
  return result.join(" ");
}

let result = wordToDigit('Please call me at five five five one two three four. Thanks.');
console.log(result);
// "Please call me at 5 5 5 1 2 3 4. Thanks."
