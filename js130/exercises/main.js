// main.js
const {concatDouble} = require('./concatDouble');
const {addString } = require('./addString');


addString('a');
addString('bc');
addString('def');
addString('ghij');
console.log(concatDouble()); // => abcbcdefdefghijghij
