// class Vehicle {
//   startEngine() {
//     return 'Ready to go!';
//   }
// }
//
// class Truck extends Vehicle {
//   startEngine(speed) {
//     return `${super.startEngine()} Drive ${speed}, please!`
//   }
// }
// Pseudo classical
// function Vehicle() {
//   // startEngine() {
//   //   return 'Ready to go!'
//   // }
// }
// Vehicle.prototype.startEngine = function () {
//   return "Ready to go!"
// };
//
// function Truck() {
//   // startEngine(speed) {
//   // }
// }
// Truck.prototype = Object.create(Vehicle.prototype)
// Truck.prototype.startEngine = function (speed) {
//   return `${Vehicle.prototype.startEngine()} Please drive ${speed}!`
// };
// Truck.prototype.constructor = Truck;
// console.log(Truck.prototype.constructor === Vehicle); // now false, correct.
//
//
// console.log(Object.getPrototypeOf(truck1).constructor === Truck); // instance obj's can also access constructorFunction.prototype.constructor
// //
// // let truck2 = new Truck();
// // console.log(truck2.startEngine('slow'));


// OLOO
let vehicleHub = {
  init: function(year) {
    this.year = year;
    return this;
  },
  startEngine: function() {
    return "Ready to go!";
  }
};
let truckHub = Object.create(vehicleHub);

truckHub.init = function(year, bedtype) {
  vehicleHub.init(year);
  this.bedtype = bedtype;
  return this;
};
truckHub.startEngine = function(speed) {
  return vehicleHub.startEngine() + ` Drive ${speed}, please!`;
};


let truck1 = Object.create(truckHub).init(2003, 'Short');
console.log(truck1.bedtype);
console.log(truck1.startEngine('fast'));
