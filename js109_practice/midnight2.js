//u - represent the time of day relative to midnight -- before or after.
// if minutes are positive, after midnight
// if minutes are negative, this is time before midnight
//input: number of minutes either before or after midnight
//output: tiem of day in 24h format "hh:mm"
//rule: 0 means midnight
// -3 --> three minutes until midnight, or 24:00 - 00:03 minutes
// 35 => 00:35 minutes after midnight
// -1437 ==> find how many hours before midnight, then how many minutes in the hour ?
  // 23 hours, 57 minutes elapsed
// -4231 ==> 70 hours, 31 minutes
  //70 - (Math.floor(70 / 24) * 24) ==> 22 hours before midnight, 31 minutes.
  // hh = 24 - 22 - 1 =1
  // mm = 60 - 31 = 29
//3000 => 50 hours, 00 minutes after midnight
    // 50 -24 - 24 = 2 hours left over;  or 50 / 24 = 2.08333, floor is 2 hours
    // 02:00 after midnight
// 800 min  => 800 /60 = 13 hours \\\ input minutes % 60 * 60 =  20 minutes
//algo: if hours > 24, take Math.floor(hours/24) as hours past midnight
  // hours = input minutes / 60
  // input minutes % 60 * 60 to get minutes

// negative minutes - find elapsed time
  //hh == 24 - hours - 1
  // mm = 60 - minutes;

  //1. find elapsed hours and minutes.
  // 2. if it's negative input, then roll clock backwards elapsed time
  // 3. format in hh:mm string, padding digits where necessary.

function timeOfDay(n) {
  const MIN_PER_HOUR = 60;
  const HRS_PER_DAY = 24;
  let nCopy = n;

  if (n < 0) nCopy *= -1;
  let hrs = Math.floor(nCopy / MIN_PER_HOUR);
  if (hrs > HRS_PER_DAY) {
    hrs = (hrs - Math.floor(hrs / HRS_PER_DAY) * HRS_PER_DAY);
  }
  let mins = nCopy;
  if (hrs > 0 ) {
    mins = nCopy % MIN_PER_HOUR;
  }
  if (n < 0) {
    hrs = HRS_PER_DAY - hrs - 1;
    mins = MIN_PER_HOUR - mins;
  }
  // console.log(hrs, mins);
  return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}`
}

// timeOfDay(35);
// timeOfDay(3000);
// timeOfDay(800);
// timeOfDay(-3);
// timeOfDay(-1437);
// timeOfDay(-4231);

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29"); // ??
