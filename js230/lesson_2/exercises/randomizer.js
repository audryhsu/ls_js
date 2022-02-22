/*
Write a randomizer function that accepts n callbacks and calls each callback at some random point in time between now and 2 * n seconds from now. For instance, if the caller provides 5 callbacks, the function should run them all sometime within 10 seconds.

While running, randomizer should log the elapsed time every second: 1, 2, 3, ..., 2 * n.
*/
function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  let n = callbacks.length;
  let seconds;
  // loop through an array of callbacks and pass into settimeout with a random delay
  callbacks.forEach((callback, i) => {
    seconds = randomSeconds(n);
    console.log(`Set timer for callback #${i + 1} after ${seconds / 1000} seconds..`);
    setTimeout(callback, seconds);
  });

  let counter = 1;
  let counterId = setInterval(function () {
    if (counter > seconds) clearInterval(counterId);
    console.log(counter);
    counter++;
  }, 1000);
}

function randomSeconds(numCallbacks) {
  let maxTime = numCallbacks * 2 * 1000; // max time in seconds
  return Math.floor(Math.random() * maxTime);
}

randomizer(callback1, callback2, callback3);


// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6
