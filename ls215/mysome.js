/*
- array and function
- callback fn gets current element, indx, array
- every itereates all elements until the callback returns falsy and then final return is false , else returns true
- some iterates over elements until callback returns a truthy value, in which it returns true;
*/

function myEvery(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (!func(array[i], i, array)) {
      return false;
    }
  }
  return true;
}

function mySome(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

let isAString = value => typeof value === 'string';
let r = myEvery(['a', 'a234', '1abc'], isAString);
console.log(r);
