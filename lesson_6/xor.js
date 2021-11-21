// two arguments a, b
// only one can be truthy
// if a is true, b is false == true
// if a is false, b is true == true
// if a is true, b is true == false
// if both false == false

function xor(a, b) {
  if (a && !b) return true;
  if (b && !a) return true;
  return false;

}




console.log(xor(5, 0) === true); // wrong
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false); //wrong
console.log(xor(true, true) === false); // wrong
