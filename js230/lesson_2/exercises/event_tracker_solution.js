// LS Solution
const tracker = (() => {
  const events = [];
  return {
    list() {
      return events.slice();
    },
    elements() {
      return this.list().map(({target}) => target);
    },
    add(event) {
      events.push(event);
    },
    clear() {
      events.length = 0;
      return events.length;
    },
  };
})();

function track(callback) {
  function isEventTracked(events, event) {
    return events.includes(event);
  }

  return event => {
    if (!isEventTracked(tracker.list(), event)) {
      console.log('Recorded event!');
      tracker.add(event);
    }

    callback(event);
    console.log(tracker.list());
  };
}

// Wrapped inside a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', (e) => {
  const divRed = document.querySelector('#red');
  const divBlue = document.querySelector('#blue');
  const divOrange = document.querySelector('#orange');
  const divGreen = document.querySelector('#green');

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
