function logOdd(startNumber, endNumber) {
  if (startNumber % 2 === 0) {
    startNumber += 1;
  }
  while (startNumber <= endNumber) {
    console.log(startNumber);
    startNumber += 2;
  }
}

function oddFor(startNumber, endNumber) {
  for (let counter = startNumber; counter < endNumber; counter += 2) {
    console.log(counter);
  }
}

console.log(logOdd(2, 101));
