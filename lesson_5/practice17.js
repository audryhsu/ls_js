
function generateInt() {
  return Math.floor(Math.random() * 10);
}
function generateIndex() {
  return Math.floor(Math.random() * 6);
}

function generateLetter() {
  let letters = 'abcdef'.split('');
  return letters[generateIndex()];
}

function pickDigit() {
  let digit = Math.floor(Math.random() *2)
  if (digit === 0) {
    return generateInt();
  }
  return generateLetter();
}

// generate substrings 5 times at different lengths
  // for each substring, run pickDigit function x number of times
  // first round: 8x
    // store each digit in array
    // after 8th digit, use join array into a string
  // loop three times:
    //loop four times:
      // runpickDigit and push to tempArr


  // fifth: 12 x
// concatenate all substrings with '-'
// return a concatenated string

function generateSection(numOfDigits) {
  // returns a string
  let tempArr = [];
  let counter = 0;
  while (counter < numOfDigits) {
    tempArr.push(pickDigit());
    counter += 1
  }
  return tempArr.join('')
}

function generateUUID() {
  let finalArr = [];
  finalArr.push(generateSection(8));
  finalArr.push(generateSection(4));
  finalArr.push(generateSection(4));
  finalArr.push(generateSection(4));
  finalArr.push(generateSection(12));
  console.log(finalArr);

  return finalArr.join('-');
}

console.log(generateUUID());
