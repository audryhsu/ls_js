/*
- takes an array and  function and invokes it as a callback once for every element in the array
it passess an accumulatr, cv, currentindx, and array being procssed
reduce passes the accumulator to the next callback invocation and uses the return value of the final callabck in the overall return value
- optional second argument, initial value as argument to first invocation of callback; if none provided ,use the first element of the array and start processing with second element

reduce((previousValue, currentValue, currentIndex) => , 0);
*/

let myReduce = (array, func, initial) => {
  let accumulator;
  let startIdx = 0;
  if (initial === undefined) {
    accumulator = array[startIdx];
  } else {
    accumulator = initial;
    startIdx = 1;
  }
  for (let i = startIdx; i < array.length; i++) {
    let result = func(accumulator, array[i], i, array);
    accumulator = result;
  }
  return accumulator;
};

function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"


let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

// let s = myReduce([5, 12, 15, 1, 6], smallest);           // 1
// let total = myReduce([5, 12, 15, 1, 6], sum, 10);
// console.log(s, total);
