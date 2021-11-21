let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

// c-->b --> a --> Object.prototype

function assignProperty(object, prop, newValue) {
  let objPrototype = Object.getPrototypeOf(object);
  console.log("Prototype object: ", objPrototype);
  if (object.hasOwnProperty(prop)) {
    object[prop] = newValue;
    return;
  }
  while (objPrototype !== Object.prototype) {
    if (objPrototype[prop]) objPrototype[prop] = newValue;
    objPrototype = Object.getPrototypeOf(objPrototype)
    console.log("New prototype: ", objPrototype);
  }
}

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false
