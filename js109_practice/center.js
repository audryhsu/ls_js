// Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

//string input
// return string
// rule - middle character (s) of the string; includes whitespace as a char
// if odd - one char

// if even - two chars

function centerOf(str) {
  if (str.length <= 1) console.log(str);

  let middle = (str.length / 2);
  if (str.length % 2 === 0) {
    console.log(str.slice(middle - 1, middle + 1));

  } else {
    console.log(str[Math.floor(middle)]);
  }

}


centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
centerOf('xs');                 // "xs"
// length is 2, log 0 & 1; 2/2 = 1
// abcd
// length is 4, log 1 & 2
// 4/2 = 2, & middle - 1
centerOf('xyz');                 // "xyz"
// length is 3, 3/2 = 1.5 floor ==> log 1
