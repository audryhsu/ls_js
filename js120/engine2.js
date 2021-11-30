class Vehicle {
  startEngine() {
    return 'Ready to go!';
  }
}

class Truck extends Vehicle {
  startEngine(speed) {
    return `${super.startEngine()} Drive ${speed}, please!`;
  }
}

Object.assign(Truck, Vehicle.prototype);

let truck1 = new Truck();
console.log(truck1.startEngine('fast'));

let truck2 = new Truck();
console.log(truck2.startEngine('slow'));
