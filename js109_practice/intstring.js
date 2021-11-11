let digits = {
  0 : '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9'
};

let integerToString = (num) => {
  if (num < 0) num *= -1;
  let digitsArr = extractDigits(num);
  return digitsArr
  .map((elem, index) => digits[elem])
  .reverse()
  .join("");
}

let extractDigits = (num) => {
  let digitsArr = [];
  if (num === 0) return [0];
  while (num > 0) {
    digitsArr.push(num % 10);
    num = Math.floor(num /10);
  }
  return digitsArr;
}
let signedIntegerToString = (num) => {
  if (num < 0) return `-${integerToString(num)}`;
  else if (num > 0) return `+${integerToString(num)}`;
  else {return integerToString(num);}
}
//input: number
//output: string rep of that number
//rule: cannot use built in type conversions
//algo: the modulo 10 of number is the digit.
// new number becomes Math.floor(number / 10).
// continue taking modulo as digit, adding to an array.
// once number <= 0, stop.
// convert number digits into string digits,  via an dictionary
// reconstruct the digit as a string by concatenating digits, starting from end of array to beginning.
// integerToString(4321);        // "4321"
// integerToString(0);           // "0"
// integerToString(5000);        // "5000"
// let result = integerToString(1234567890);  // "1234567890"
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
