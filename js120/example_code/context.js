let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar();
  },
};

obj.foo();        // => undefined undefined


// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//      let bar = () =>{
//       console.log(this.a + ' ' + this.b);
//     };
//
//     // bar.call(obj);
//     // let baz = bar.bind(obj)
//     // baz();
//     bar();
//   },
// };
//
// obj.foo();        // => undefined undefined
