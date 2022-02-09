/*
input: year as an integer
- must be > 0
- must be integer, cannot bea string
- cannot be floating point -- use modulo one to check
output: returns a string, century
  - digits that represent the century
  - append appropriate enumerator
rule:
- new century begins when year ends with '01'
- 1901 - 2000 is 20th century
- any year 100 or earlier is in the 1st century

Determine century based on integer year
look at the hundreds place
- 2000 -> 20th
- 2001 -> 21st
- 2002 -> 21st
- 1956.. 20th
- 5 -> 1st

Math.round(year / 100) + 1
unless it ends with 00, then don't add one. % 10

Based on year, append appropriate enumerator
- 4-10, 11, 12, 13, 14,... th
- 1 - st
- 2 nd
- 3 rd
//11, 12, 13 --> if ends in 1,2,3, add extr check for these
ds: use an object to map ending digit as key
  - if
algo:
- look at last digit of century string if length
  - if 1, 2, or 3 and it cnetury string length >= 2,
    - check if ends in 11, 12, 13
  -
- else if append 'th'

*/
// const enum = {
//   '1': 'st',
//   '2': 'nd',
//   '3': 'rd'
// }

function century(year) {
  if (typeof year !== 'number' || Number.isNaN(year) || year < 1) return null;
  let century = yearToCentury(year);
  let ending = '';
  let lastDig = century.substring(century.length - 1);

  if (lastDig === '1') {
    if (century.length > 1 && century.substring(century.length - 2) === '11') ending = 'th';
    else ending = 'st';
  } else if (lastDig === '2') {
    if (century.length > 1 && century.substring(century.length - 2) === '12') ending = 'th';
    else ending = 'nd';
  } else if (lastDig === '3') {
    if (century.length > 1 && century.substring(century.length - 2) === '13') ending = 'th';
    else ending = 'rd';
  } else {
    ending = 'th';
  }
  console.log(century + ending);
  return century + ending;
}


function yearToCentury(year) {
  let century = parseInt(year / 100) + 1;
  if (year % 100 === 0) century -= 1;

  return String(century);
}


// console.log(century(2000) === "20th");
// console.log(century(2001) === "21st");
// console.log(century(1956) === "20th");
// console.log(century(256) === "3rd");
// console.log(century(5) === "1st");
// console.log(century(10103) === "102nd");
// console.log(century(1052) === "11th");
// console.log(century(1127) === "12th");
console.log(century(11201) === "113th");
console.log(century(0) === null);
// console.log(century(-2) === null);
// console.log(century('two thousand') === null);
// console.log(century('2000') === null);
