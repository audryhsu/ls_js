function integerToString(integer) {
  // keys in objects are always strings
  if (integer === 0) return '0';
  arr = [];
  while (integer / 10 > 0) {
    arr.push(integer % 10);
    integer = Math.floor(integer / 10);

  }
  return arr.reverse().join('');
}

console.log(integerToString(4321) === '4321');
console.log(typeof(integerToString(4321)));
console.log(typeof(integerToString(5)));
console.log(typeof(integerToString(0)));

//ex 4321

// number % 10 = 1 // use this digit
// number = Math.floor(number / 10) =  432
// 432 % 10 = 2 // use this digit
// Math.floor(number / 10) =  43
// 43 % 10 = 3 // use this digit
// number = Math.floor(number / 10) =  4

//ex 5
