/*
Implement a function that tracks events on a web page by wrapping a callback function in a function that adds each event to a tracker object before invoking the callback. In other words, your function should take a callback function as an argument and return a new function that:

Records the event, if the specific event hasn't been recorded before.
Executes the original callback function.

- write a function that adds an event to an object
- function takes a callback as an arg
- returns: new function
  - records event to object if not been recorded before
  - invokes callback arg

Create a tracker object type
- list method - returns array of recorded events
  - list can only contain event objects
- elements method - returns lit of elements that were tracked (i.e. event.currentTarget)
- clear: resets recorded events to an empty array, and returns 0

add event.currentTarget
*/

class Tracker {
  constructor() {
    this.events = [];
    this.tracked = [];
  }
  trackElement(element) {
    if (element instanceof Element) this.tracked.push(element);
  }
  recordEvent(event) {
    if (event instanceof Event) this.events.push(event);
  }
  list () {
    return this.events.slice();
  }
  elements () {
    return this.tracked;
  }
  clear () {
    this.events = [];
    return this.events.length;
  }
}

const tracker = new Tracker(); // instantiate new Tracker object

function track(callback) {
  return function(e) {
    e.stopPropagation(); // properly colors document body color based on div clicked, and prevents duplicate event recordings
    tracker.trackElement(e.target);
    tracker.recordEvent(e);
    callback(e);
  };
}

// wrapped in DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', (e) => {
  let divRed = document.querySelector('#red');
  let divBlue = document.querySelector('#blue');
  let divGreen = document.querySelector('#green');
  let divOrange = document.querySelector('#orange');

  divRed.addEventListener('click', track(event => {
    document.body.style.background = 'red';
  }));

  divBlue.addEventListener('click', track(event => {
    event.stopPropagation();
    document.body.style.background = 'blue';
  }));

  divOrange.addEventListener('click', track(event => {
    document.body.style.background = 'orange';
  }));

  divGreen.addEventListener('click', track(event => {
    document.body.style.background = 'green';
  }));
});
