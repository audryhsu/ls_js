const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
};

class Vehicle {
  constructor(year) {
    this.year = year;
  }
}
class Truck extends Vehicle {
  constructor(year) {
    super(year);
    Object.assign(this, towMixin); // also using a mixin object
  }
}

class Car extends Vehicle {
  constructor(year) {
    super(year);
  }
}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);

/*
Vehicle is a superclass of the Truck and Car subclass. The subclasses invoke the superclass's constructor function upon instantiation, which allows both Trucks and Car instances to have a year property. The Truck class also has access to the tow method from the towMixin object, as the method is copied over to new instances of trucks upon instantiation.

this code demonstrates the concept that we can use both class inheritance as well as mixin objects to design the desired object oriented functionality.
*/
