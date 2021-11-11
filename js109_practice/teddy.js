/*
Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).
*/

// randomly generate an integer
//output: log age using string interpoleation
// input: no input
// rule - between 20 and 120 up to including

// Math.random returns a floating point between 0 inclusive and 1 exclusive.
// because the float is always less than 1, multiplying by your max number and taking the floor of it will always make the return value exclusive of your max.
  // to make it inclusive of your max, + 1

function getRandomInt(num1, num2) {
  let max = num1 > num2 ? num1: num2;
  let min = num1 < num2 ? num1: num2;

  return Math.floor(Math.random() * (max - min + 1) + min);
}

function teddy() {
  let age = getRandomInt(10 , 1);
  console.log(`Teddy is ${age} years old!`);

}

teddy();
