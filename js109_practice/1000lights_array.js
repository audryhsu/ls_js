function lightsOn(switches) {
  let switchBoard = Array(switches + 1).fill(0);
  switchBoard.shift();
  let countPasses = 1;

  do {
    for (let i = 0; i < switchBoard.length; i++) {
      if (isMultiple(i + 1, countPasses)) {
        switchBoard[i] === 0 ? switchBoard[i] = 1 : switchBoard[i] = 0;
      }
    }
    countPasses++;
  } while (countPasses <= switches);

  let result = filterLightsOn(switchBoard);
  return result;

}
function isMultiple(number, multiple) {
  return number % multiple === 0;
}

function filterLightsOn(switchBoard) {
  return switchBoard.map((elem, index) => {
    if (elem === 1) return index + 1
  }).filter(elem => elem);
}



lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
