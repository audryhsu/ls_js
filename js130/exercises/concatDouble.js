// Moved to concatDouble.js module
const { getValues } = require('./addString');

function double(value) {
  return value + value;
}

function concatDouble() {
  return getValues().reduce((result, value) => {
    return result + double(value);
  });
}

module.exports = {concatDouble };
