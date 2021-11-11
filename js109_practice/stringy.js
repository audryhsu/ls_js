//input positive integers
// return string of '1' and '0' alternating
// always starts with 1
// length of string == input integer

// edge case - integer is 1 or 0
// if it's odd, then ends with 1
// else, repeat "10"
// 2 -> repeat 1
// 4 -> repeat 2

function stringy(integer) {
  let stringy = "";
  if (integer === 1) return String(1);
  stringy = "10".repeat(Math.floor(integer / 2))
  if ( integer % 2 === 1) return stringy + '1';
  return stringy;
}

// function stringy(integer) {
//   let result = "";
//   for (var i = 0; i < integer; i++) {
//     let number = (integer % 2 === 0) ? '1':'0';
//     result += number;
//   }
//   return result
// }


console.log(typeof(stringy(6)));
console.log(stringy(9));
console.log(stringy(7));
console.log(stringy(4));
console.log(stringy(1));
console.log(stringy(0));
