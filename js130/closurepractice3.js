function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  };
}

let incrementCounter = makeCounter(); // function & closure (includes pointer to counter in outer scope)
console.log(incrementCounter()); // logs 1. pointer to counter sticks with the envelope.
console.log(incrementCounter()); // cannot find a counter variable in local function scope, so looks in closure.
// closure has a reference to a variable counter. increments that variable.
// counter is 2.

incrementCounter = makeCounter(); // declare a new counter variable and initialize to 0.
//new anon. function returned with it's closure, includes pointer to new counter.
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2
