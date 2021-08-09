let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// return an array
//for each subArr, sum only odd numbers
// retain sum to determine sort order
//
// let result = arr.map(subArr => {
//   let sumOdds = subArr.reduce((accumulator, currentNumber) =>
//   if (currentNumber % 2 === 1) {
//     accumulator += currentNumber);
//   }
// ).sort((a, b) => );
//


let result = arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1).reduce((accumulator, currentNumber) => accumulator + currentNumber);
  let oddSumB = b.filter(num => num % 2 === 1).reduce((sum, next) => sum + next);
  return oddSumA - oddSumB;
});

console.log(result);
