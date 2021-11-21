prop1 = 'I am global'; // creates a property `prop1` defined on the global object

let obj = {
  'prop1' : 'I am within obj',
  a: () => {
    console.log(this.prop1);
  },

  b: function helloThere() {
    let arrowWithinMethod = () => {
      console.log(this.prop1);
    }
    arrowWithinMethod();
  },
}
obj.a(); // logs 'I am global' - Arrow Function inherits from surrounding context, which is global
obj.b(); // logs 'I am within obj' - Arrow Function inherits from surrounding context, which is the object that contains the method

let globalContext = obj.b
globalContext(); // logs 'I am global'

// bind obj b method to obj, then reassign to bindFunc
let bindFunc = obj.b.bind(obj);
bindFunc();      // logs 'I am within obj'
