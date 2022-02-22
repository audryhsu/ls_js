//funtion takes an year as an integer greater than 0
// validate input is > 0
// is year % 4 === 0?
  // if yes, is year % 100 !== 0?
    // if yes, then return it's a leap year

// // is year % 100 === 0?
//   if yes, is year % 400 === 0?
//     if yes, return it's a leap year?
//
// return not a leap year

// leap
// 4, 400
// not leap
// 4 & 100

// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) return false;
//     return true;
//   }
//   else if (year % 100 === 0 && year % 400 === 0) {
//     if (year % 400 === 0) return true;
//   }
//   return false;
// }
function isLeapYear(year) {
  // Julian Calendar
  if (year < 1752 ) {
    if (year % 4 === 0) return true;
  }
  else {
    if (year % 400 ===0 ) return true;
    if (year % 4 ===0 && year % 100 !== 0) return true;
  }
  return false;
}

//   isLeapYear(2016)); //true
// console.log(
//   isLeapYear(2015)); // false
// console.log(
//   isLeapYear(2100));
// console.log(
//   isLeapYear(2400)); // true
// console.log(
// isLeapYear(240000));    // true
// console.log(
// isLeapYear(240001));    // false
// console.log(
// isLeapYear(2000));      // true
// console.log(
// isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true
