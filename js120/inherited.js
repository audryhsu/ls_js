// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }
//
// class Truck extends Vehicle {}
//
// class Car extends Vehicle {}

// PC

function Vehicle(year) {
  this.year = year;

}
Vehicle.prototype.honk = function () {
  console.log("honk honk!");
};

function Truck(year, bedtype) {
  Vehicle.call(this, year);
  this.bedtype = bedtype;
}


Truck.prototype = Object.create(Vehicle.prototype); // must set truckprototype to vehicle.prototype's [[Prototype]] before new truck instances are created, or else they won't inherit from Vehicle.
// let truck1 = new Truck(2003, 'Short');
// console.log(Object.getPrototypeOf(Truck.prototype) === Vehicle.prototype);
// console.log(Object.getPrototypeOf(truck1) === Truck.prototype);
// truck1.honk(); // honk honk

// OLOO - create prototype objects for each, then create new objects linked to hubs

const vehicleHub = {
  init(year) {
    this.year = year;
    return this;
  },
  beep() {
    console.log("beeeeeeep");
  }
};
const truckHub = Object.create(vehicleHub); // this creates the link between vehicleHub and truckHubs for method inheritance.

truckHub.init = function(year, bedtype) {
  vehicleHub.init(this, year);
  this.bedtype = bedtype;
  return this;
};
truckHub.honk = function() {
  console.log("honk honk!");
};
// truckHub.__proto__ = Object.create(vehicleHub) // this gives trucks access to vehicle methods, but truckHub's prototype is not vehicleHub.
let vehicle1 = Object.create(vehicleHub).init(2000);
let truck2 = Object.create(truckHub).init(2003, 'Short');
console.log(Object.getPrototypeOf(truck2) === truckHub); // true
console.log(Object.getPrototypeOf(truckHub) === vehicleHub); // false! need to inherit from vehicle

truck2.beep();
truck2.honk();
