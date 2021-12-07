/*
template object
init keyword as the pseudo constructor function -- shortcut to initialize new objects based on properties and returns new object
Object.create, template is the prototype
*/

// Define the prototype
let vehicleHub = {
  init(name, engine) {
    this.name = name;
    this.engine = engine;
    return this; // return the new object
  },
  honk() {
    console.log("honk honk!");
  }
};

let vicky = Object.create(vehicleHub).init('vicky', 'electric');
let victor = Object.create(vehicleHub).init('victor', 'engine');

console.log(vicky.honk === victor.honk);
console.log(Object.getPrototypeOf(vicky) === vehicleHub); // true

// Linking vehicles to cars
let carHub = Object.create(vehicleHub);

carHub.init = function(name, engine) {
  vehicleHub.init(name,engine);
  this.doors = 4;
  return this;
};

let carl = Object.create(carHub).init('carl', 'gas');
carl.honk();
console.log(carl.doors);

console.log(Object.getPrototypeOf(carl) === carHub); // true
console.log(Object.getPrototypeOf(carHub) === vehicleHub); // true
