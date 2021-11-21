let obj = {
  func: function() {
    return this;
  },
};

let context = obj.func();
console.log(context); // this is obj
context = obj.func;
console.log(context); // [Function: func]
