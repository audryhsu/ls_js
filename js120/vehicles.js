class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  getWheels() {
    return this.wheels;
  }

  info() {
    return `${this.make} ${this.model} ${this.wheels}`;
  }
}
class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, 4);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }

  info() {
    return `${super.info()} ${this.payload}`;
  }
}

let car = new Car('toyota', 'corolla');
let motorcycle = new Motorcycle('honda', 'lime');
let truck = new Truck('penske', 'moving', '200 lbs');

console.log(car.info());
console.log(motorcycle.info());
console.log(truck.info());
console.log(truck.payload);
console.log(truck.getWheels());
console.log(car.getWheels());
