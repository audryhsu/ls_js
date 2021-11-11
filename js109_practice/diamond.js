//input: odd integer that represents greatest width of the diamond
//output: multi-line diamond
//rule: n number of lines and greatest numebr of asteriks
  // n >= 1
  //
//algo:

function diamond(number) {
  let multipliers = [];
  for (var i = 1; i <= number; i += 2) {
    multipliers.push(i);
  }
  for (var i = number - 2; i >= 1; i -= 2) {
    multipliers.push(i);
  }

  let pad = Math.ceil(number / 2);
  let padCount = [];
  for (var i = pad; i <= number; i++) {
    padCount.push(i);
  }
  for (var i = number - 1; i >= pad; i--) {
    padCount.push(i);
  }

  for (var i = 0; i < multipliers.length; i++) {
    let diamondRow = '*'.repeat(multipliers[i]).padStart(padCount[i], " ");
    console.log(diamondRow);
  };

}


diamond(3);
// logs
//  *
// ***
//  *
//
diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
