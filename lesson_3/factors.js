function factors(number) {
  let divisor = number;
  let factors = [];

  //new code
  if (number <= 0) {
    throw "Enter a number greater than 0";
  }
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

factors(0);
