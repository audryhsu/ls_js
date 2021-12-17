function myBind(func, context) {
  let args = [].slice.apply(arguments, [2]); // save the arguments as a private data from initial function maker
  console.log(`Initial args: ${args}`);

  return function() {
    let remainingArgs = [].slice.apply(arguments); // apply partial args to function?
    console.log(`Remaining args: ${remainingArgs}`);
    let fullArgs = remainingArgs.concat(args); // combine all args and pass into returned new function

    return func.apply(context, fullArgs);
  };
}

function addNumbers(a, b) {
  let result = a + b;
  console.log(result);
}

let addTen = myBind(addNumbers, null, 10);

addTen(5);
