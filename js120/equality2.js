function objectsEqual(obj1, obj2) {
  obj1Keys = Object.keys(obj1);
  obj2Keys = Object.keys(obj2);

  obj1Values = Object.values(obj1);
  obj2Values = Object.values(obj2);

  for (var i = 0; i < obj1Keys.length; i++) {
    if (obj1Keys[i] !== obj2Keys[i]) return false;
  }
  for (var i = 0; i < obj1Values.length; i++) {
    if (obj1Values[i] !== obj2Values[i]) return false;
  }
  return true;
}


console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
