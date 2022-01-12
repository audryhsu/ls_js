// main.js
const concatDouble = require('./concatDouble');
const addString = require('./addString');


addString('a');
addString('bc');
addString('def');
addString('ghij');
console.log(concatDouble()); // => abcbcdefdefghijghij


// Moved to addString.js module
const concatDouble = require('./concatDouble');
let values = [];

function addString(value) {
  values.push(value);
}

module.exports = {addString, values }


// Moved to concatDouble.js module

function double(value) {
  return value + value;
}

function getValues() {
  return [...values];
}

function concatDouble() {
  return getValues().reduce((result, value) => {
    return result + double(value);
  });
}
module.exports = {concatDouble, double, getValues };
