let oddNumbers = [];
[1,2,3].forEach(function(number) {
  if (number % 2 === 1) {
    oddNumbers.push(number);
  }
});

console.log(oddNumbers);
