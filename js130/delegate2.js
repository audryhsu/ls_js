// Refactor using rest & spread
function delegate(object, methodName, ...args) {
  console.log(args);
  return function () {
    return object[methodName].apply(object, args);
  };
}

// function delegate(object, methodName) {
//   let restOfArgs = Array.from(arguments).slice(2); //if there are additional args besides the required two
//
//   return function () {
//     return object[methodName].apply(object, restOfArgs);
//   }
// }


let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed') };

baz.qux();          // logs 'changed'
