/*
input:
output:
- Meetup class that creates meetup objects
- constructor takes a year, month

meetup.day
- takes a day of the week (string case insensitive) and 'schedule string: 'first', 'second', 'third', 'fourth', 'fifth', 'last', and 'teenth'
- returns date object given  meetup's year and month.
rule:
- teenth- find the day of teh week that ends in teenth: 13, 14,15,16,17,18,19
algo:
- determine the 7 dayp eriod in which the meetup with occur
  - search the 7 days for the correct weekday and descriptor

day():
- map day of the week string into DOW index ==> mapping array?
- map descriptor to 7 day period to search ==> map descriptor to a DOWM indx
  -

*/

class Meetup {
  static daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ]
  static DOWM = Meetup._createDOWMArrays();

  static _createDOWMArrays() {
    let stop = [1,8,15,22,29,32];
    let daysArray = stop.reduce((acc, currentValue, idx) => {
      let day = stop[idx];
      let array = [];

      while (day < stop[idx + 1]) {
        array.push(day);
        day++;
      }
      return acc.concat([array]);
      }, []);
      return daysArray;
  }

  _getDOWMArray(descriptor) {
    switch (descriptor.toLowerCase()) {
      case 'first': return Meetup.DOWM[0]
      case 'second': return Meetup.DOWM[1]
      case 'third': return Meetup.DOWM[2]
      case 'fourth': return Meetup.DOWM[3]
      case 'fifth': return Meetup.DOWM[4]
      case 'teenth': return [13, 14,15,16,17,18,19]
    }
  }

  _getDayOfWeekIndex(dayOfWeek) {
    return Meetup.daysOfWeek.findIndex(day => day === dayOfWeek.toLowerCase());

  }

  constructor(year, month) {
    this.year = year;
    this.monthIdx = month - 1;
  }

  _getLastSevenDaysOfMonth() {
    let lastDay = new Date(this.year, this.monthIdx + 1, 0)
    let dates = [];
    let date = lastDay.getDate()

    while (dates.length < 8) {
      dates.push(date)
      date--;
    }
    return dates;
  }

  day(dayOfWeek, descriptor) {
    const dayOfWeekIdx = this._getDayOfWeekIndex(dayOfWeek);
    let dates = this._getDOWMArray(descriptor)

    if (descriptor.toLowerCase() === 'last') {
      dates = this._getLastSevenDaysOfMonth();
    }
    
    let dateObj;

    for (let i = 0; i < dates.length; i++) {
      dateObj = new Date(this.year, this.monthIdx, dates[i]);
      if (dateObj.getDay() === dayOfWeekIdx) return dateObj;
    }
    return null;
  }
}

let meetup = new Meetup(2016, 10);
console.log(meetup.day('monday', 'teenth').toString()) // 2/22

module.exports = Meetup
