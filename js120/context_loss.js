Using call
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }
    bar.call(this); // sets context to obj
    bar();
  },
};

Using bind
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    // console.log(this); // obj
    let bar = function() {
      console.log(this.a + ' ' + this.b);
    }.bind(this)
    // console.log(this); // obj
    bar();
    bar();
    bar();
  },
};
// Using Arrow functions - inherit context from surrounding context, aka outer function foo's context (which is obj)
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let bar = () => {
      console.log(this.a + ' ' + this.b);
    }

    bar();
    bar();
  },
};

obj.foo();        // => hello world
