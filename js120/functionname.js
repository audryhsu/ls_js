let foo = function bar() {
  console.log(bar);
};

foo(); // logs [Function:bar] -- shows that bar function has access to itself.
bar(); // ReferenceError: bar is not defined.
