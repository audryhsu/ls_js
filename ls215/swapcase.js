/*
input: string
output: string with every lowercase changed to upper, and uppercase changed to lower.
- leave all non letters unchanged
rule:
algo: split string into characters
  - if char is lowercase, return uppercase

*/
// function swapCase(string) {
//   let r = string.split('').map((char, _) => {
//     return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
//   }).join('')
//   console.log(r);
// }

function swapCase(string) {
  let r = string.replace(/\w/g, char => (/[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()));
  console.log(r);
}
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
swapCase('T0night! o*@#&n XYZ-TV');      // "tONIGHT ON xyz-tv"
