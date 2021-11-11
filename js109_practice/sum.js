// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

//input: positive integer
//output: sum of digits
//rule: use list methods, no declarative programming
//examples:

function sum(num) {
  // [...String(num)] --> shortcut to split the string into array of digits
  let result = String(num).split("")
  .reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue));
  return result;

  // result.forEach((_, i) => {
    //   result[i] = Number(result[i]);
    // });
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
