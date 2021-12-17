/*
input:
output: create clock Objects
rule:
- be able to add/subtract minutes
- two clocks with same time should be equal -- so compare values, not object equality.
- 24 hour clock
- must be able to wrap around forward and backwards from midght
algo:
- do all operations in minutes
-
methods:
- create clock objects using class method Clock.at(hour, minutes) as integers
  - Clock.at(0) infers midnight
  - minutes argument is optional -- default to 0

instance methods:
- add(integer) - adds minutes, can be over 60
- subtract(integer) - subs minutes
*/

class Clock {
  static MINUTES_PER_HOUR = 60;
  static MINUTES_PER_DAY = Clock.MINUTES_PER_HOUR * 24
  static HOURS_PER_DAY = 24;

  static at(hours, minutes=0) {
    return new Clock(hours, minutes)
  }

  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  subtract(lessMins) {
    let clockMins = this._clockInMinutes() - lessMins;

    while (clockMins < lessMins) {
      clockMins += 1440;
    }
    this.hours = this._calculateHours(clockMins);
    this.minutes = this._calculateMinutes(clockMins);
    return this;
  }

  add(moreMins) {
    let clockMins = this._clockInMinutes() + moreMins;
    this.hours = this._calculateHours(clockMins);
    this.minutes = this._calculateMinutes(clockMins);
    return this;
  }
  _calculateHours(totalMins) {
    let hours = (Math.floor(totalMins / Clock.MINUTES_PER_HOUR)) % 24
    return hours;
  }
  _calculateMinutes(totalMins) {
    let minutes = totalMins % Clock.MINUTES_PER_HOUR
    return minutes;
  }

  isEqual(clock) {
    return (this.hours === clock.hours && this.minutes === clock.minutes)
  }
  toString() {
    let hours = String(this.hours).padStart(2, '0')
    let minutes = String(this.minutes).padStart(2, '0')
    return `${hours}:${minutes}`
  }

  _clockInMinutes() {
    return (this.hours * Clock.MINUTES_PER_HOUR) + this.minutes;
  }
}

module.exports = Clock;
