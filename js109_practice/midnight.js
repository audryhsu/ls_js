
// The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.
//
// Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.
//
// You may not use javascript's Date class methods.

//input is integer that represents minutes before or after midnight
// output - formatted string, four places
// rule - if input is negative, go backwards from midnight based on 24 hours
// if input is positive, time is after midnight
// rule - should work with ANY input integer
// deal with negative and positive differently?

//algo - 60 minutes in an hour
// 24 hours in a day

// start with minutes, need to determine hours.
// modulo of hours and convert back to minutes
// format time string and pad with zero's if necessary
// what if it's greater than 1440 minutes, or one day, need to start the clock over again
// 3000 minutes / 1440 minutes = 2.08
// 2 is hours
//
function timeOfDay(minutes) {
  const MIN_PER_HR = 60;
  const MINUTES_PER_DAY = 1440;
  let floatTime = minutes / MIN_PER_HR;
  let hours = 0;
  let minute = 0;

  //if greater than 1440 minutes, or one day
  if (minutes >= 1440 || minutes <= -1440) {
    floatTime = minutes / MINUTES_PER_DAY;
    hours = parseInt(floatTime);
    minute = Math.floor((floatTime % 1) / MIN_PER_HR);
  }
  else {
    hours = parseInt(floatTime);
    minute = Math.floor((floatTime % 1) * MIN_PER_HR);
  }
  if (minutes < 0) {
    hours = 23 - (hours *-1);
    minute = 60 - (minute * -1);
  }
  console.log(`floattime: ${floatTime}`);
  console.log(`hours: ${hours}`);
  console.log(`minutes: ${minute}`);


  // convert to string
  console.log(`${String(hours).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
  return `${String(hours).padStart(2, '0')}:${String(minute).padStart(2, '0')}`

}

// console.log(timeOfDay(0) === "00:00"); //pas
// console.log(timeOfDay(-3) === "23:57"); //pass
// console.log(timeOfDay(35) === "00:35"); //pas
// console.log(timeOfDay(-1437) === "00:03"); //pas
// console.log(timeOfDay(3000) === "02:00"); //pass
// console.log(timeOfDay(800) === "13:20");//pas
console.log(timeOfDay(-4231) === "01:29");
