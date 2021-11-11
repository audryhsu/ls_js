//Write a function that implements a mini stack and register programming language that has the following commands

// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
// REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.
// All operations are integer operations (which is only important with DIV and REMAINDER).

// Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, and they won't contain any unknown tokens.
//

//input: a string that idctates the program
//output:
//rule: initilize stack to empty array. initialize register to 0.
// any integer value in the program string represents the current register value.
// register value is always an integer, even for DIV AND REMAINDER operations

//algo:
// Initialize the stack and register to the values [] and 0, respectively as global variables.
// decompose program str word by word, using an array?
  // loop through each word in program str
  // if word is an integer -- set register to new integer value
  // if word is a program cmd, then run the cmd with register and stack.
// write mini functions for each operation, that takes register and stack as arguments.
  // PUSH, ADD, SUB, MULT, DIV, REMAINDER, POP -- all mutate the stack. these should update the global register variable.


function PRINT(register) {
  console.log(`PRINT REGISTER: ${register}`);
}

function PUSH(register, STACK) {
  STACK.push(register)
  // return `${register} pushed to STACK!`
}

function ADD(register, STACK) {
  register = STACK.pop() + register;
  console.log(`Register updated to ${register}`);
  return register;
}
function SUB(register, STACK) {
  register = register - STACK.pop();
  console.log(`Register updated to ${register}`);
  return register;
}
function MULT(register, STACK) {
  register = register * STACK.pop();
  console.log(`Register updated to ${register}`);
  return register;
}

function DIV(register, STACK) {
  register = Math.floor(register / STACK.pop());
  console.log(`Register updated to ${register}`);
  return register;
}

function REMAINDER(register, STACK) {
  register = register % STACK.pop();
  console.log(`Register updated to ${register}`);
  return register;
}

function POP(register, STACK) {
  register = STACK.pop()
  console.log(`Register updated to ${register} and removed from STACK.`);
  return register
}

function minilang(programStr) {
  const STACK = [];
  let register = 0;

  let cmds = programStr.split(" ");
  cmds.forEach((cmd, i) => {
    if (Number.isInteger(Number(cmd))) register = Number(cmd);
    else if (cmd === 'PRINT') {
      PRINT(register, STACK)
    }
    else if (cmd === 'PUSH') {
      PUSH(register, STACK)
    }
    else if (cmd === 'ADD') {
      register = ADD(register, STACK)
    }
    else if (cmd === 'SUB') {
      register = SUB(register, STACK)
    }
    else if (cmd === 'MULT') {
      register = MULT(register, STACK)
    }
    else if (cmd === 'DIV') {
      register = DIV(register, STACK)
    }
    else if (cmd === 'REMAINDER') {
      register = REMAINDER(register, STACK)
    }
    else if (cmd === 'POP') {
      register = POP(register, STACK)
    }
    else {
      console.log('cmd not found');
    }

  });

  // console.log(STACK);

}
/// TESTS

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

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6
//
// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12
//
// minilang('-3 PUSH 5 SUB PRINT');
// // 8
//
minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
