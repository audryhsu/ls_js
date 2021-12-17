// function product(...numbers) {
//   let args = Array.from(arguments) // arguments is array-like object
//   return args.reduce((total, number) => total * number);
// }
//
// let result = product(2, 3, 4, 5);
//


// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   // missing code
//   return {
//     type: animalType,
//     age,
//     colors
//   }
// }
//
// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]


function func(first, middle1, middle2, middle3, last) {
  return {
    first,
    last,
    middle: [middle1, middle2, middle3]
  };
}

let array = [1, 2, 3, 4, 5];
let {first, last, middle } = func(...array);

console.log(first);
console.log(last);
console.log(middle);
