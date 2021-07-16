 // write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, false if it is not.


function isNotaNumber(value_to_check) {
  if (typeof(value_to_check) != 'number') {
    return true;
  }
  return false;

}

console.log(isNotaNumber(12));
console.log(isNotaNumber('hi'));
// return typeof(value_to_check) != 'number' ? true : false
