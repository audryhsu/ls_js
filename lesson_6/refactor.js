//refactor this code to use one return statement and without explictly using booleans

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// function isColorValid(color) {
//   return (color === "blue" || color === "green");
// }
// // option 1
// let isColorValid = color => color === "blue" || color === "green";
// // option 2
// let isColorValid = color => ["blue", "green"].includes(color);


function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = 0;
while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}



console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
