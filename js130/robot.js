/*
input:
output: create an Robot class that creates new robots
- random string name generated when robot is created
- each robot instance has a name method that returns it's name
- reset instance method that generates a new name
- each robot has a unique name that follows NAME_REGEXP = AAA00

algo:


- create a func that validates name isn't in takenNames
*/

class Robot {
  static takenNames = [];

  static generateName() {
    let name = "";
    let counter = 0;

    do {
      while (counter < 2) {
        name += Robot.randomLetter();
        counter++;
      }
      counter = 0;
      while (counter < 3) {
        name += Robot.randomDigit();
        counter++;
      }
    } while (Robot.nameNotTaken(name));

    return name;
  }

  static nameNotTaken(name) {
    return Robot.takenNames.includes(name);
  }

  static randomLetter() {
    let letters = 'abcdefghijklmnopqrstuvwqyz'.toUpperCase().split("")
    let idx = Math.floor(Math.random() * letters.length);
    return letters[idx];
  }

  static randomDigit() {
    let digits = '1234567890'.split("");
    let idx = Math.floor(Math.random() * digits.length)
    return digits[idx];
  }

  constructor() {
    this.robotName = Robot.generateName();
    Robot.takenNames.push(this.robotName)
  }

  name() {
    return this.robotName;
  }

  reset() {
    this.robotName = Robot.generateName()
  }
}

let robot = new Robot();
console.log(robot.name());
robot.reset()
console.log(robot.name());

module.exports = Robot
