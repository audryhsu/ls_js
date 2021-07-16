function isNegativeZero(value) {
  return (2 / value) === -Infinity;
}

console.log(isNegativeZero(-0));

console.log(isNegativeZero(0));
