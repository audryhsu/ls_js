
function stringy(num) {
  let stringy = '1';
  while (stringy.length < num) {
    let char = '1';
    if (stringy.length % 2 === 1) char = '0';
    stringy += char;
  }
  console.log(stringy);
  return stringy;
}

//input: num represents length of string
//output: string of 1 and 0's
//rule: stringy always starts with 1
//algo: var that holds string.
// while string.length < num, concat 0, then 1, alternating
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
