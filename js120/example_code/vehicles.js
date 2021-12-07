// PS Inheritance
function Vehicle(name) {
  this.name = name;
}
Vehicle.prototype.honk = function () {
  console.log("honk honk!");
};

function Car(name) {
  Vehicle.call(this, name);
}
Car.prototype = Object.create(Vehicle.prototype);

function Yacht(name) {
  this.name = name;
}

Mixin
let refuelMixin = {1
  refuel() {
    console.log("refueling!");
  }
};

Object.assign(Car.prototype, refuelMixin);
Object.assign(Yacht.prototype, refuelMixin);

// Calling constructor functions with 'new'
let vicky = new Vehicle('vicky');
let carl = new Car('carl');
let yogi = new Yacht('yogi');
carl.refuel();
yogi.refuel();

console.log(Object.getPrototypeOf(carl) === Car.prototype); // true
console.log(Object.getPrototypeOf(carl).constructor === Car); // true
console.log(Object.getPrototypeOf(Car.prototype) === Vehicle.prototype); // true

// Check for Own properties
console.log(Object.keys(Car.prototype));

// ES6 Class
class Vehicle {
  constructor(name) {
    this.name = name;
  }
  honk() {}
}

class Car extends Vehicle {
  constructor(name) {
    super(name);
  }
}
let vicky = new Vehicle('vicky');
let carl = new Car('carl');

carl.honk();

console.log(Object.getPrototypeOf(carl) === Car.prototype); // true
console.log(Object.getPrototypeOf(carl).constructor === Car); // true
console.log(Object.getPrototypeOf(Car.prototype) === Vehicle.prototype); // true
