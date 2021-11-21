function evens(startNumber, endNumber) {
  if (startNumber % 2 === 1) {
    startNumber += 1;
  }
  while (startNumber <= endNumber) {
    console.log(startNumber);
    startNumber += 2;
  }
}
console.log(evens(2,62));
