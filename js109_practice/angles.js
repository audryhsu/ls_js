// Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.


//input - float between 0 and 360
// output - string representing angle degrees, minutes, seconds
// deliminate using correct symbols

// rules 1 degree = 60 minutes, 1 minute = 60 seconds
// integer portion represents the angle
// angle % 1 * 60 = minutes
// minutes % 1  *60 = seconds

// if minute or second is one digit, add a leading zero

function dms(float) {
  let degree = Math.floor(float);

  let minute = Math.floor((float % 1) * 60);
  let second = Math.round((((float % 1) * 60) % 1) * 60);
  // if (minute < 10) minute = '0' + String(minute);
  // if (second < 10) second = '0' + String(second);

  console.log(degree + '˚' + String(minute).padStart(2, '0') + "'" + String(second).padStart(2, '0') + '"');
  return degree + '˚' + minute + "'" + second + '"';
}


// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"
dms(-1);   // -1°00'00"
dms(400);  // 400°00'00"
dms(-40);  // -40°00'00"
dms(-420); // 420°00'00"
