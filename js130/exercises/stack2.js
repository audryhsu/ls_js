

let myStack = (function newStack() {
  let stack = [];

  return {
    push(value) {
      stack.push(value);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach((item, _) => {
        console.log(item);
      });

    },
  };
})();

myStack.push('one');
myStack.push('two');
myStack.printStack(); // one, two
myStack.pop();
myStack.printStack(); // one
console.log(myStack.stack); // undefined
