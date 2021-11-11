//input: year as argument
//output: returns the number of Friday the 13ths in that year
//rule: assume year is greater than 1752
//algo: iterate over months of a year, for each month, return weekday that 13th falls on. if it's friday, add to count.


function fridayThe13ths(year) {
  let counter = 0;
  for (var i = 0; i < 12; i++) {
    let date = new Date(year, i, 13)
    if (date.getDay() === 5) counter ++;
  }
  return counter;
}

let result = fridayThe13ths(1986);      // 1
result = fridayThe13ths(2015);      // 3
result = fridayThe13ths(2017);      // 2

console.log(result);
