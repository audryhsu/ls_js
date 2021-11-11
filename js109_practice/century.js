// Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.
//
// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

// input - year as int
// return string century -- digits, then ends with st, nd, rd, or th

// range of conditionals
// <= 100 - 1st
// <= 200 2nd
// <= 300 3rd
// 2000 / 100 = 20 th
  // if no remainder, year / 100 = century digit
//else
// year % 100 > 0, then Math.floor( 2001 / 100) + 1  is century digit

// check last digit and determin ending
// 1: 'st',
// 2: 'nd',
// 3: 'rd',
// else 'th'
// teens are all th
// 21st, 22nd, 23rd,
// if length is 2 or more: check last two digits
// if length is 1: check just the last digit
// // 11, 12, 13 in the array?
//   if yes -- ends th
//   if no, follow normal rules

// TODO: refactor out to different functions
// write modulo method of getting remainder

function century(year) {
  let digit;
  let end = 'th';
  let arr = ['11','12','13'];

  if (year % 100 === 0) {
    digit = String(year / 100);
  } else {
    digit = String(Math.floor(year / 100) + 1);
  }
  let lastDigit = digit.slice(-2);
  // if it's not 11,12,13, look at the last digit
  if (!arr.includes(lastDigit)) {
    if (lastDigit.slice(-1) === '1') end = 'st';
    if (lastDigit.slice(-1) === '2') end = 'nd';
    if (lastDigit.slice(-1) === '3') end = 'rd';
  }
  console.log(digit + end);
  return digit + end;

}
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
