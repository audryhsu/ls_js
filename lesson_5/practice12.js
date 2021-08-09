let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

//return a new array with nested arrays
// filter for multiples of three
let result = arr.map(subArr => {
  return subArr.filter(num => num % 3 === 0)
});

console.log(result);
