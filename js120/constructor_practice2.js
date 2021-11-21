let PI = 3.141592654;

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function area(radius) {
  return PI * Math.pow(this.radius, 2);
}

let a = new Circle(3);
let b = new Circle(4);

console.log(Circle.prototype);

console.log(
a.area().toFixed(2)); // => 28.27
console.log(
b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty('area')); // => false
console.log(
a.hasOwnProperty('area')); // => false
