/*
Create a function newStack, that, when called, returns a stack object with three methods: push, pop, and printStack. push takes a value and appends it to the stack. pop removes and returns the last element from the stack. printStack logs each remaining element of the stack on its own line, starting with the item that was least recently added to the stack and ending with the most recently added item.

Internally, use an array to implement the stack. Make sure that the array is not accessible from outside the methods.
*/

function newStack() {
  let stack = [];
  return {
    push(item) {
      stack.push(item);
    },
    pop(item) {
      stack.pop(item);
    },
    printStack() {
      stack.forEach((item, _) => {
        console.log(item);
      });
    },
  };
}

let s = newStack();
s.push('an item');
s.printStack();
