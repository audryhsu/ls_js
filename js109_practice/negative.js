// Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

//input integer
//output negative integer
// rule if positive, multiply by -1

function negative(num) {
  console.log(num < 0 ? num : num * -1);  

}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
