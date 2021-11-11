
// ensure detla minutes is in range between 0 and 1440, minutes per day using modulo


function timeOfDay(minutes) {
  const  MINUTES_PER_DAY = 1440;
  const MIN_PER_HR = 60;
  if (minutes < 0) {
    minutes = (minutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    minutes = minutes % MINUTES_PER_DAY
  }

  console.log(minutes);
  let hours = Math.floor(minutes / MIN_PER_HR);
  let minute = minutes % MIN_PER_HR;

  console.log(`hours: ${hours}`);
  console.log(`minutes: ${minute}`);
}


// console.log(timeOfDay(0) === "00:00"); //pas
// console.log(timeOfDay(-3) === "23:57"); //pass
// console.log(timeOfDay(35) === "00:35"); //pas
// console.log(timeOfDay(-1437) === "00:03"); //pas
// console.log(timeOfDay(3000) === "02:00"); //pass
// console.log(timeOfDay(800) === "13:20");//pas
// console.log(timeOfDay(-4231) === "01:29");


console.log(timeOfDay(3000)); //pass
console.log(timeOfDay(800));//pas
console.log(timeOfDay(-4231));
