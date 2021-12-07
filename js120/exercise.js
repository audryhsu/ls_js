
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

Rectangle.prototype.toString = function() {
  return `[Rectangle ${this.length} x ${this.width}]`;
};

function Square(size) {
  this.length = size;
  this.width = size;
}


Square.prototype = Object.create(Rectangle.prototype);

console.log(Square.prototype === Rectangle.prototype); // false
console.log(Square.prototype.__proto__ === Rectangle.prototype); //true
console.log(Square.prototype.constructor.name); // Rectangle
console.log(Square.prototype); // no methods

Square.prototype.constructor = Square;

Square.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width}]`;
};
console.log (Square.prototype.hasOwnProperty ("toString")); // true
console.log (Square.prototype.hasOwnProperty ("getArea")); // false

let sqr = new Square(5);
console.log(sqr.getArea());     // => 25
sqr.toString();    // => "[Square 5 x 5]"

console.log(sqr.constructor.name); // Rectangle, fixed to Square
console.log(Object.getPrototypeOf(sqr) === Square.prototype); // true
