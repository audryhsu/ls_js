/*
input: positive interger number
output: string of alternating 1 and 0, always starting with 1
rule:
- length of string should equal input integer
algo:
*/

function stringy(length) {
  if (typeof length === 'string') length = Number(length);
  if (typeof length !== 'number' || Number.isNaN(length) || length < 0 || length === Infinity) return null;

  let str = '';
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0 ) str += '1';
    else str += '0';
  }
  return str;
}

console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");
console.log(stringy(0) === "");
console.log(stringy('4') === '1010');
console.log(stringy(' ') === "");
console.log(stringy([10]) === null);
console.log(stringy(undefined) === null);
console.log(stringy({}) === null);
