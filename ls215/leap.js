/*
p: leap year occur every year that is:
 % 4 === 0 leap year
 if %4 && % 100
  - if % 400, then leap
  - else, not leap
valid for years > 0
input: integer
- string version? valid convert it to a number
- anything else is invalid
- '' returns null
- leading zeros for a string number ? ignore
- floating point ? invalid

output: boolean
rule:
algo:
- validating input
- converting to a number
- check numebr against leap year rules
*/

function isLeapYear(year) {
  year = Number(year);
  if (typeof year !== 'number' || year < 1 || year === NaN || !year || !Number.isInteger(year)) return null;

  if (year < 1752) {
    if (year % 4 === 0) {
      console.log('true');
      return true;
    }
    console.log('false');
    return false;
  }

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log('true');
        return true;
      }
      console.log('false');
      return false;
    } else {
      console.log('true');
      return true;
    }
    console.log('true');
    return true;
  }
  console.log('false');
  return false;
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true
