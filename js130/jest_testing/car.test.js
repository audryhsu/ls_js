const Car = require("./car");

describe("The Car class", () => {
  test("has four wheels", () => {
    let car = new Car();
    expect(car.wheels).toBe(4);
  });
  test('two new cars are equal objects', () => {
    let car1 = new Car();
    let car2 = new Car();

    expect(car1).not.toEqual(car2);
  });
});
