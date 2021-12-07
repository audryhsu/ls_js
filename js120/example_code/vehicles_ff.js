"use strict";

function createVehicle(name, engine) {
  return {
    name,
    engine,
    honk: function() {
      console.log("honk honk!");
    }
  };
}

// Mixin
let refuelMixin = {
  refuel() {
    console.log("refueling!");
  }
};

let vicky = createVehicle('vicky', 'electric');
Object.assign(vicky, refuelMixin);
vicky.refuel();

function createCar(name, engine) {
  let vehicleObj = createVehicle(name, engine);

  let carObj = {
    identify() {
      console.log("i'm a car");
    }
  };
  return Object.assign(carObj, vehicleObj);
}

let car = createCar('craig', 'diesel');
console.log(car);
car.identify();

// FF Objs have their own copies of methods
let victor = createVehicle('victor', 'hybrid');
console.log(victor.honk === vicky.honk);
console.log(victor.constructor.name);
console.log(vicky.constructor.name);
