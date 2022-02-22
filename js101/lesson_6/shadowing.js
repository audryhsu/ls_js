let arr = [['first', 2], 'third', 4, ['fifth']]; // nested array, the pointers (shallow copy are copied over - they are not distinct). The primitive values are distinct though.
let arrCopy = arr.slice();
console.log(`arrCopy: ${arrCopy}`);

arrCopy[0][0] = '1st'; // this references the shallow copy and the pointer, so the change will be seen in both places
arrCopy[1] = '3rd'; // this references a primitive value, the actual value is stored. The change will only be seen in arrCopy

console.log(`Original arr: ${arr}`);
console.log(`arrCopy: ${arrCopy}`);
