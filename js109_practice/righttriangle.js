// Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

//input -- positive integer
// output -- multi line image logged to console
// number of lines == input number
// first row logged == stars * inputnumber
// decrement input number and increment a padded space before stars
// last row == always one star

// if input number is 0 -- return ''
// first row = pad count 0, num = num
// second row = pad count = 1, num - 1


function triangle(num) {
  let padCount = num - 1;
  let stars = 1;
  while (stars <= num) {
    console.log(" ".repeat(padCount).concat(`*`.repeat(stars)));
    stars += 1;
    padCount -= 1;
  }
}

triangle(8);
triangle(5);
//
//     *
//    **
//   ***
//  ****
// *****
