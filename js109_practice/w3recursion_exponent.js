// compute exponent of a numbers

// 8^2 = 8*8 = 64

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

console.log(power(8,2));
console.log(power(2, 4));
