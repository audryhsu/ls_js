/*
update implementation of myFilter by adding functionality of accpeting an optional thisArg
*/

function myFilter(array, func, context) {
  let result = [];
  func = func.bind(context); // hard binds the execution context of the function to the passed in context object!

  array.forEach(function(value) {
    if (func(val)) {
      result.push(value);
    }
  });

  return result;
}

let filter = {
  allowedValues: [5, 6, 9],
};


myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter);
