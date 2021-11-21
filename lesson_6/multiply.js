function multiply(num1, num2) {
  return num1 * num2;
}


function power(num, degree) {
  let result;
  if (degree === 1) return num;
  for (let i = 0; i < degree; i++) {
    result = multiply(num, num);
  }
  return result;
}

console.log(power(2, 3));
console.log(power(2, 1));

function power2(num, degree) {
  return num ** degree;

}

console.log(power2(2,3));
