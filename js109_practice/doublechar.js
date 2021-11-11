// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.


//input - strings
//output - string
//rule - every char in the string is doubled, case sensistive, includes characters and whitespaces
// algo - use list, iterate

// string concat - letter, add another letter,
// map

function repeater(str) {
  let arr = str.split("");
  let result = arr.map(char => char + char).join("");
  console.log(result);

}
//
// function repeater(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     result += str[i];
//     result += str[i];
//   }
//   console.log(result);
//
// }

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
