let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

//return array with three nested arrays
// check if letters or numbers
// within array, order ascending
let result = arr.slice();

result.map(subArr => {
  if (typeof(subArr[0]) === 'number') {
    subArr.sort((a,b) => b-a);
  }
  else {
    subArr.sort().reverse();
  }
});

console.log(result);
