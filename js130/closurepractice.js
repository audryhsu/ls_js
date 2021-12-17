let counter = 0;

function makeCounter() {
  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter(); // stores anon function definition and closure
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

incrementCounter = makeCounter(); // storing new version anon function def. and closure, but closure's counter variable is same variable reference since it's global scope.
console.log(incrementCounter()); // 3
console.log(incrementCounter()); // 4
