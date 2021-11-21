// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     // let self = this;
//     function bar() {
//       console.log(this.a + ' ' + this.b);
//     }
//     console.log(this); // obj
//     bar.call(this);
//   },
// };

// Using bind
// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     // console.log(this); // obj
//     let bar = function() {
//       console.log(this.a + ' ' + this.b);
//     }.bind(this)
//     // console.log(this); // obj
//     bar();
//     bar();
//     bar();
//   },
// };
// Using Arrow functions

obj.foo();        // => hello world
