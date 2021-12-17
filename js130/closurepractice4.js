function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  };
}

let incrementCounter1 = makeCounter(); //  a. function definition with closure that includes counter variable (0).
let incrementCounter2 = makeCounter(); // a. function declaration with closure that includes a separate counter varialbe (0)

console.log(incrementCounter1()); // 1
console.log(incrementCounter1()); // 2

console.log(incrementCounter2()); // 1
console.log(incrementCounter2()); // 2

/*
Each returned function has an independent copy of the counter variable (different places in memory). They are part of different envelopes.
*/
