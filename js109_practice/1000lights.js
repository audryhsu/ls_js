function lightsOn(switches) {
  if (switches < 1) return `Must have at least one switch`;
  if (switches === 1) return [1];
  let lights = Array(switches + 1).fill(0).entries(); //creates Array Iterator, 0 indexed
  let switchBoard = Object.fromEntries(lights);
  let countPasses = 1;
  delete switchBoard['0']; // removes 0 indexed switchlight

  do {
    for (let prop in switchBoard) {
      if (isMultiple(prop, countPasses)) {
        switchBoard[prop] === 0 ? switchBoard[prop] = 1 : switchBoard[prop] = 0;
      }
    }
  countPasses++;
  } while (countPasses <= switches);

  return filterLightsOn(switchBoard);
}

function isMultiple(number, multiple) {
  return number % multiple === 0;
}

function filterLightsOn(switchBoard) {
  let switches = [];
  for (let prop in switchBoard) {
    if (switchBoard[prop] === 1) switches.push(prop);
  }
  return switches;
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
