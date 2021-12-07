// // Pseudoclassical
// function Vehicle(year) {
//   this.year = year;
// }
// Vehicle.prototype.honk = function () {
//   console.log("honk honk!");
// }
// function Truck(year, bedtype) {
//   Vehicle.call(this, year);
//   this.bedtype = bedtype;
// }
// Truck.prototype = Object.create(Vehicle.prototype)
// Truck.prototype.constructor = Truck
// let truck = new Truck(2020, 'Long')
// truck.honk(); // honk honk
//
// OLOO
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
let truck2 = Object.create(truckHub).init(2003, 'Short');
//
// // // ES6
// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
//   honk() {
// console.log("honk honk")
// }
// }
//
// class Truck extends Vehicle {
//   constructor(year, bedtype) {
//     super(year);
//     this.bedtype = bedtype
//   }
// }
//
// let truck = new Truck(2020, 'Long')
// truck.honk(); // honk honk
