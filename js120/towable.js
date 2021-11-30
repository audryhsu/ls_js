class Truck {}

class Car {}

let towMixin = {
  tow: function tow() {
    console.log(`I can tow a trailer!`);
  }
};

Object.assign(Truck.prototype, towMixin);

let truck = new Truck();
truck.tow();
