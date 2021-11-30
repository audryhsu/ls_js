const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}
Object.assign(Car.prototype, Speed)
Object.assign(Truck, Speed)

let car = new Car();
car.goSlow();
car.goFast(); // I'm a Car and going super fast!
