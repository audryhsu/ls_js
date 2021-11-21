// takes a string
// use the length of the string to determine number of places
// look at at each element of string

function stringToInteger(str) {
  digits =
  {'0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9}

  let numArray = [];



  // First attempt using for loops
  // for (let i = 0; i < str.length; i++) {
  //   for (let key = 0; key < Object.keys(digits).length; key++) {
  //     if (str[i] === Object.keys(digits)[key]) {
  //       numArray.push(Object.values(digits)[key])
  //     }
  //   }
  // }
  // let power = str.length - 1;
  // let sum = 0;
  //
  // for (let i = 0; i < str.length - 1; i++) {
    //   sum += numArray[i] * 10**(power);
    //   power -=1;
    // }
    // sum += numArray[numArray.length - 1]

  // Refactor using map method -- MUCH simpler
  // split the string into an array, and map each char in array to digit in digits
  numArray = str.split("").map(char => digits[char])

  // Refactor using different algorithm
  let sum = 0;
  numArray.forEach(digit => {
    sum = (sum * 10) + digit;
  });
  return sum;
}

console.log(stringToInteger('230'));
