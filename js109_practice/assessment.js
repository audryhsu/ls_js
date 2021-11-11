function objectHasProperty(object, property) {
  if (object[property]) {
    return 1;
  } else {
    return 2;
  }
}

let obj = {}
obj['something'] = 3;
obj['enabled'] = 'false'; // update the value to a string type
obj['another'] = 0; // update the value to a string type

console.log(objectHasProperty(obj, 'something')); // returns 1
console.log(objectHasProperty(obj, 'active'));    // returns 2
console.log(objectHasProperty(obj, 'enabled')); //returns 1
console.log(objectHasProperty(obj, 'another')); //returns 2 even though exists
