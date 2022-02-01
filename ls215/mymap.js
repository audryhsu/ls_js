/*
takes a func and array, and returns a new array
array.map((elem, i, array))
*/

let myMap = (array, func) => {
  let result = [];

  array.forEach((item, i, array) => {
    result.push(func(array[i], i, array));
  });
  return result;
};

let count = '12345'.split('');
let doubled = (n) => {
  return n * 2;
};
console.log(myMap(count, doubled));
