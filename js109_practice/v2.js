function objectHasProperty(object, property) {
  return object.hasOwnProperty(property) ? 1: 2;
}

let obj = {}
obj['something'] = 3;
obj['enabled'] = false;
obj['zero'] = 0;
obj['NaN'] = NaN;
obj['undefined'] = undefined;

console.log(objectHasProperty(obj, 'something')); // returns 1
console.log(objectHasProperty(obj, 'active'));    // returns 2
console.log(objectHasProperty(obj, 'enabled')); //returns 1
console.log(objectHasProperty(obj, 'zero')); // returns 1
console.log(objectHasProperty(obj, 'NaN')); // returns 1
console.log(objectHasProperty(obj, 'undefined')); // returns 1
