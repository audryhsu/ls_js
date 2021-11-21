function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

// Refactor releveraging the stringToInteger function
function stringToSignedInteger(string) {
  // if (string[0].charCodeAt(0) === '-'.charCodeAt(0)) {
  if (string[0] === '-') {
    return stringToInteger(string.split('').slice(1).join("")) * -1;
  }
  if (string[0] === '+') {
    return stringToInteger(string.split('').slice(1).join(""));
  }
  else {
    return stringToInteger(string)
  }
}


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

// Write function takes string of digits and returns approporate number as integer.
// if + sign is first char --> return positive number
  // create number array from index[1] position and on

// if - sign is first char --> run stringToInteger and * -1
  // multiply by -1 in the end.
// if no sign, return positive
