const gasVehicle = {
  range() {
    return this.fuelCap *  this.fuelEfficiency;
  },
}


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
Object.assign(WheeledVehicle.prototype, gasVehicle)

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20], 80, 8.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
  }
}
Object.assign(Catamaran.prototype, gasVehicle)

let car = new Auto()
console.log(car); // Auto { tires: [ 30, 30, 32, 32 ], fuelEfficiency: 50, fuelCap: 25 }
console.log(car.range()); // 1250

let boat = new Catamaran(4, 2, 50, 5.0);
console.log(Catamaran.prototype); // Catamaran { propellerCount: 4, hullCount: 2 }
console.log(boat.range()); //
