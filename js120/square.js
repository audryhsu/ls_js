// class Rectangle {
//   constructor(width, length) {
//     this.width = width;
//     this.length = length;
//   }
//   getWidth() {
//     return this.width;
//   }
//   getLength() {
//     return this.length;
//   }
//   getArea() {
//     return this.width * this.length;
//   }
// }
//
// class Square extends Rectangle {
//   constructor(size) {
//     super(size,size);
//   }
// }

//Pseudoclassical


let rect = new Rectangle(4, 5);
let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25