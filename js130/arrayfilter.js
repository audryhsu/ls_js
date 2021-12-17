
function filter(array, callbackfn, thisArg) {
  let result = [];
  for (var i = 0; i < array.length; i++) {
    if (callbackfn.call(thisArg, array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}


let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]
