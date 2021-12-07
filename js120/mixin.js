let fuelEfficiency = {
  range() {
    return this.fuelCap *  this.fuelEfficiency;
  },
};
class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20], 80, 8.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic
    this.kmTravelledPerLiter = kmTravelledPerLiter;
    this.fuelCapInLiter = fuelCapInLiter;

    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
  }
}
Object.assign(WheeledVehicle.prototype, fuelEfficiency);
Object.assign(Catamaran.prototype, fuelEfficiency);

let bike = new Motorcycle(1,2,3);
console.log(bike.range());
let boat = new Catamaran(1,2,3,4);
console.log(boat.range());
