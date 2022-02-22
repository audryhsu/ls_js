let statement = "The Flintstones Rock";

let letters = [... new Set(statement)]
let countDict = {};

for (let i = 0; i < letters.length; i++) {
  for (let j = 0; j < statement.length; j++) {
    if (statement[j] === letters[i]) {
      if (Object.keys(countDict).includes(letters[i]) === false) {
        countDict[letters[i]] = 0;
      }
      countDict[letters[i]] += 1;
    }
  }
}

console.log(countDict);


// create unique list of letters in statement
// loop through each letter in set
  // loop through each letter in statement
  // if statement letter  === set letter
    // if != countDict[set letter]
      // countDict[ set letter] = 0;
    // countDict[setLetter] += 1;
