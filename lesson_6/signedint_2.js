function stringToSignedInteger(string) {
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

  if (string.charCodeAt(0) === '-'.charCodeAt(0) || string.charCodeAt(0) === '+'.charCodeAt(0)) {
    for (let i = 1; i < arrayOfDigits.length; i++) {
      value = (10 * value) + arrayOfDigits[i];
    }
    //if negative signed int
    if (string.charCodeAt(0) === '-'.charCodeAt(0)) return value *= -1;
    return value;
  }
  // keep code the same if unsigned int
  else {
    arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
    return value;

  }
}
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
