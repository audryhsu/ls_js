
function diamond(n) {
  let result = [];
  let increment = 2;
  let number = 1;

  while (number >= 1) {
    if (number === n) increment = -2;
    result.push(number);
    number += increment;
  }

  let padCount = [];
  let pad = Math.floor(n / 2);
  number = pad;
  increment = -1;

  while (number <= pad) {
    if (number === 0) increment = 1;
    padCount.push(number);
    number += increment;
  }
  console.log(padCount);

  for (var i = 0; i < result.length; i++) {
    console.log(`${" ".repeat(padCount[i])}${"*".repeat(result[i])}`);
  }
}


diamond(3);
// logs
//  *
// ***
//  *
//
diamond(9);
