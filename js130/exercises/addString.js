// Moved to addString.js module

let values = [];

function addString(value) {
  values.push(value);
}


function getValues() {
  return [...values];
}

module.exports = {addString, getValues };
