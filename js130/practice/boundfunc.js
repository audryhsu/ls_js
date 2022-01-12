"use strict";

/*
function that emulates context binding of bind; call the function with desired context.
*/

function bind(context, func) {
  return () => {
    func.call(context);
  };
}


let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }
