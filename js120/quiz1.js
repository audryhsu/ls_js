function bar() {
  console.log('good morning');
}

global.inner = {
  bar() {
    console.log('good afternoon');
  },
};

let obj = {
  inner: {
    bar() {
      console.log('good night');
    },

    foo() {
      bar();
    },
  },

  bar() {
    console.log('wake up');
  },

  foo() {
    this.inner.bar(); // goodnight
    inner.bar(); // good night
    bar(); //wake up
  }
};

let foo = function() {
  console.log('go to sleep');
}

function go(foo) {
  foo(); // i think this gets shadowed 
}

go(foo() {
  this.inner.bar(); // good afternoon
  inner.bar(); // ?
  bar(); // good morning
});
