prop1 = 'I am global'; // creates a property `prop1` defined on the global object

let obj = {
  'prop1' : 'I am within obj',
  a: function () {
    console.log(this.prop1);
  },

  b: function helloThere() {
    console.log(`helloThere context: ${this}`);
    console.log(this.prop1);

    function nestedFunction() {
      console.log(`nestedFunction context: ${this}`); //
      console.log(this.prop1);
    }
    nestedFunction();
  },
}
obj.a(); // logs 'I am within obj' - invoked as a regular method; implicit context is obj
obj.b();
  // helloThere logs "I am within obj" -- helloThere context: [obj]
  // nestedFunction logs 'I am global' -- nestedFunction context: [object global]

let globalContext = obj.b // reassigning helloThere function, so it's equivalent to...
// let globalContext = function helloThere() {
//   function nestedFunction() {
//     console.log(this.prop1);
//   }
//   nestedFunction();
// }

globalContext();
  // logs 'I am global' BOTH times -- helloThere is no longer connected to obj!

let bindFunc = obj.b.bind(obj);
bindFunc(); // logs 'I am within obj' - helloThere is bound to obj, but nestedFunction context is still the global object and logs "I am global"
