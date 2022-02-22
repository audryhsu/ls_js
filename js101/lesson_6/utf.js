// funtion takes string passed in as argument.
// calculate utf16 strings
  // convert each char in string to utf16 value
  // take sum of all char values
  // return sum
  // check that it works with non-ASCII characters

// function utf16Value(string) {
//   if (string.length < 1) return 0;
//   let arr = [];
//   for (let index = 0; index < string.length; index++) {
//     arr.push(string.charCodeAt(index));
//   }
//   // console.log(arr);
//   let reducer = (accumulator, currentValue) => accumulator + currentValue;
//   return arr.reduce(reducer);
//
// }

function utf16Value(string) {
  let sum = 0;
  for (let index = 0; index < string.length; index++) {
    sum += string.charCodeAt(index);
  }
  return sum;
}
// console.log(utf16Value('Four score'));         // 984
// console.log(utf16Value('Launch School'));      // 1251
// utf16Value('a');                  // 97
// utf16Value('');                   // 0

const OMEGA = "\u03A9";
console.log(utf16Value(OMEGA));
console.log(utf16Value(OMEGA + OMEGA + OMEGA));
// let values = [OMEGA, OMGEA + OMEGA + OMGEA];
//
// values.forEach((item) => {
//   console.log(utf16Value(item));
//
// });
