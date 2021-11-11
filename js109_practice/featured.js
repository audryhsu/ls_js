//input: integer
//output: next featured number greater than input integer || error message if doesn't exist
//rule: feat number is an odd number that is a multiple of 7 containing unique digits.
  // odd
  // multiple of 7
  // digits are unique
  // less than 9876543201
//algo: find next multiple of seven after input integer.
          // while num is less than 9876543201...
          // Math.max(input / 7) ==> next multiple
          // cehck if odd AND digits unique
          // check if digits are unique, else continue
              // split the digits
          // increase 7 multiple by 1 -- track the multiple
//refactor toOdd to return next odd multiple of 7 instead of just checking if it's odd.
function hasUniqueDigits(n) {
  let digits = n.toString().split("").sort();
  for (var i = 0; i < digits.length; i++) {
    if (digits[i] === digits[i + 1]) return false;
  }
  return true;
}
function hasUniqueDigits(n) {
  seen = {};
  let digits = n.toString().split("");
  for (let i = 0; i < digits.length; i++) {
    if (seen[digits[i]]) {
      return false;
    } else {
      seen[digits[i]] = digits[i];
    }
  }
  return true;
}
console.log(hasUniqueDigits(133));
console.log(hasUniqueDigits(131));
console.log(hasUniqueDigits(130));

function nextOddMultipleOf7(n) {
  do {
    n += 1;
  } while (n % 2=== 0 || n % 7 !== 0);
  return n;
}
function featured(startNum) {
  const MAX_NUM = 9876543201;
  let nextNum = nextOddMultipleOf7(startNum);
  while (nextNum < MAX_NUM) {
    if (hasUniqueDigits(nextNum)) return nextNum;
    nextNum = nextOddMultipleOf7(nextNum);

  }
  return "No possible number that fulfills those requirements.";
}

// let result = featured(12);           // 21
// featured(20);           // 21
// featured(21);           // 35
// result = featured(997);          // 1029
// result = featured(1029);         // 1043
// console.time('runtime')
// result = featured(999999);       // 1023547
// console.timeEnd('runtime')
// result = featured(999999987);    // 1023456987
// featured(9876543186);   // 9876543201
// result = featured(9876543200);   // 9876543201
// result = featured(9876543201);   // "There is no possible number that fulfills those requirements."
// console.log(result);
