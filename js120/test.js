let rollMax = 13;
let rollMin = 2;
function rollDice() {
  return Math.floor(Math.random() * (rollMax - rollMin) + rollMin);
}

console.log(rollDice());
console.log(rollDice());
console.log(rollDice());
console.log(rollDice());
console.log(rollDice());
console.log(rollDice());
console.log(rollDice());
