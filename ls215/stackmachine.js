/*
problem:
- stack that can add values via push and pop. mutated.
- remove values via pop (top most value is last value added to the array, or last element)
- register = current value (separate from teh stack )
operation:
  1. pop value from top of stack
  2. register value
  3. perform operation
  4. result is new register value.

input: string that represents a program
output:
rule:
- register is always reduced to the result of the operation
- n --> n is placed in the register.
- push --> push register (n) to stack. register value remains.
- add --> pop from stack, add to register value, store result in register.

add/sub/mult/div/remainder --> pop a value from the stack, perform operation on popped & register, store the result in the register.
- div and remaindER STORE THE INTEGER in the register
pop - pop value goes to register
print - register value
ds: array as the stack
algo:
- split string on spaces (each element becomes a operation)
- if elem is a number digit, place number(digit) in register
-
*/
function minilang(program) {
  let stack = [];
  let register = 0;

  program.split(' ').forEach((item, i) => {
    switch (item) {
      case 'PUSH':
        pushToStack();
        break;
      case 'ADD':
        checkStack();
        add();
        break;
      case 'SUB':
        checkStack();
        subtract();
        break;
      case 'MULT':
        checkStack();
        multiply();
        break;
      case 'DIV':
        checkStack();
        divide();
        break;
      case 'REMAINDER':
        checkStack();
        remainder();
        break;
      case 'POP':
        checkStack();
        pop();
        break;
      case 'PRINT':
        printRegister();
        break;
      default:
        placeInRegister(item);
    }
  });
  function checkStack() {
    if (stack.length === 0) throw new Error('Stack is empty.');
  }

  function printRegister() {
    console.log(register);
  }
  function placeInRegister(n) {

    register = Number(n);
  }
  function pushToStack() {
    stack.push(register);
  }
  function add() {
    register += stack.pop();
  }
  function subtract() {
    register -= stack.pop();
  }
  function multiply() {
    register *= stack.pop();
  }
  function divide() {
    register = parseInt(register / stack.pop());
  }
  function remainder() {
    register = parseInt(register % stack.pop());
  }
  function pop() {
    register = stack.pop();
  }
  return undefined;
}


// minilang('PRINT');
// // 0
//
// minilang('5 PUSH 3 MULT PRINT');
// // 15
//
// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8
//
// minilang('5 PUSH POP PRINT');
// // 5
//
// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7
//
// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12
minilang('POP PRINT POP PRINT');
//
// minilang('-3 PUSH 5 SUB PRINT');
// // 8
//
// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)
