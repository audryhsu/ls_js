function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum <= MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      console.log(seen);
      return false;
    }

    seen[digits[idx]] = true;
    console.log(seen);
  }

  return true;
}
console.log(allUnique(133));
console.log(allUnique(130));
//
// console.time('runtime')
// result = featured(999999);       // 1023547
// console.timeEnd('runtime')
