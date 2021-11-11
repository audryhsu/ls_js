function digPow(n, p){
  let digits = splitDigits(n);
  return sumOfDigitPowers(digits, p) % n === 0 ? sumOfDigitPowers(digits, p) / n : -1;

}

let splitDigits = (n) => n.toString().split("");

let sumOfDigitPowers = (digitsArray, power) => {
  let sum = digitsArray.reduce((accum, currentValue) => {
    accum = accum + currentValue**power;
    power += 1;
    return accum;
  }, 0);
  return sum;
}


// console.log(digPow(89,1));
// console.log(digPow(92,1));
console.log(digPow(46288, 3));

do {

} while (true);
// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(digPow(89, 1), 1)
// Test.assertEquals(digPow(92, 1), -1)
// Test.assertEquals(digPow(46288, 3), 51)
//
//   });
// });
