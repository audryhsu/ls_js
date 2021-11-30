function objectsEqual(obj1, obj2) {
  if (Object.getOwnPropertyNames(obj1) === 0 && Object.getOwnPropertyNames(obj2) === 0) return true;
  for (let prop in obj1) {
    if (!obj1[prop] === obj2[prop]) return false;
    if (obj2.hasOwnProperty(prop) === false) return false;
  }

  return true;

}

// same number of keyvalue pairs
// keys must be the same string
// values must be the same string
// if both empty objects, true
/*
loop through each key and compare they are the statement
loop through each value and compare they are the same
*/


console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
