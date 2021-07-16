console.log('hi');

function multiply() {
  let rlSync = require('readline-sync');
  let a = Number(rlSync.question("Number 1"));
  let b = Number(rlSync.question("Number 2"));
  let c = a * b;
  return c;
}
console.log(multiply());
