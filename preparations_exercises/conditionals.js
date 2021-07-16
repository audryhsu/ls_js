function evenOrOdd(number) {
  if (Number.isInteger(number) === false) {
    console.log('Not an integer');
    return;
  }
  if (number % 2 === 0) {
    console.log('even')
  }
  else {
    console.log('odd');
  }
}

evenOrOdd(2);
evenOrOdd(3);
evenOrOdd(2.5);
