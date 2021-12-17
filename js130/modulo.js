function minutesToHours(m) {
  hours = Math.floor(m / 60);
  minutes = m % 60;

  console.log(`${hours} and ${minutes} minutes`);
}

minutesToHours(75);
minutesToHours(90);


/*
modulo operator allows
*/

let weekdays = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' ];
function rotate() {
  dayCount = weekdays.length;
  employeecount = 14;

  for (var i = 0; i < employeecount; i++) {
    dayIndex = i % dayCount;

    weekday = weekdays[dayIndex];

    console.log(`Scheduling employee on ${weekday}`);
  }
}

rotate();
