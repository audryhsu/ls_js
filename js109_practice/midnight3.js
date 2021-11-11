//input: time in hh:mm format string
//output: integer - number of minutes before or after midnight
//rule: output msut be in range of 1439
//algo:
const MIN_PER_HOUR = 60;
const HRS_PER_DAY = 24;
const MIN_PER_DAY = MIN_PER_HOUR * HRS_PER_DAY;
//12:34 => 12 * hrs per day + 34 minutes = 754
//before midnight -- min per day - elapsed mins = 686
//24:00 => 1440 minutes == at midnight

// split string on the : to get hours and minutes. convert each to a number.

function afterMidnight(time) {
  let [hrs, mins] = time.split(":").map(elem => Number(elem));

  let totalMin = (hrs * MIN_PER_HOUR + mins ) % MIN_PER_DAY;
  // if (totalMin > 1439) totalMin = 0;
  return totalMin;
}
function beforeMidnight(time) {
  let hrs = Number(time.split(":")[0]);
  let mins = Number(time.split(":")[1]);

  let totalMin = hrs * MIN_PER_HOUR + mins;
  totalMin = MIN_PER_DAY - totalMin;
  if (totalMin > 1439) totalMin = 0;
  return totalMin;
}


// console.log(afterMidnight("00:00") === 0);
// console.log(beforeMidnight("00:00") === 0);
// console.log(afterMidnight("12:34") === 754);
// console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
// console.log(beforeMidnight("24:00") === 0);
