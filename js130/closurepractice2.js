function makeCounter() {
  return function() {
    let counter = 0; // local function scope
    counter += 1;
    return counter;
  };
}

let incrementCounter = makeCounter(); // a. function definition & closure
console.log(incrementCounter()); // 1
// local execution context created;
// declare counter variable with value of 0. incremented
// returns 1.
// local EC destroyed. return counter (1) to the closure envelope.
console.log(incrementCounter()); // 1
// local EC created
// declaring counter set it 0; increment.
// returns 1

incrementCounter = makeCounter(); // new version of anon. function and closure.
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 1
