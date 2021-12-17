// function myBind(func, context) {
//   let partialArgs = [].slice.apply(arguments, [2]); // get second arg
//   console.log(partialArgs); //5 becomes private
//
//   return function() {
//     let remainingArgs = [].slice.apply(arguments); // args passed into new returned function
//     console.log("remaining args: ", remainingArgs); // 10
//
//     let fullArgs = partialArgs.concat(remainingArgs);
//     console.log("full args: ", fullArgs); // args from first func, args second func as an array
//
//     return func.apply(context, fullArgs);
//   };
// }

// Using spread and arrows
let myBind = (func, context, ...args) => {
  let partialArgs = args;
  console.log(partialArgs);
  return (...restArgs) => {
    let remainingArgs = restArgs;
    let fullArgs = partialArgs.concat(remainingArgs);
    return func.apply(context, fullArgs);
  };
};

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

let result = addFive(10, 10); // the extra arg is ignored
console.log(result); // 15
