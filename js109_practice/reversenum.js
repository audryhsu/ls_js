// Write a function that takes a positive integer as an argument and returns that number with its digits reversed.

//input - positive integer
// output - reversed digits
// rule - leading zeros get dropped

function reverseNumber(num) {
  let result = String(num).split("").reverse().join("");
  console.log(Number(result));

}


reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1
