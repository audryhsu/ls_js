daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ];
DOWM = [];

function createDOWMArrays() {
  let stop = [1,8,15,22,29];
  let daysArray = stop.reduce((acc, currentValue, idx) => {
    let day = stop[idx];
    let array = [];

    while (day < stop[idx + 1]) {
      array.push(day);
      day++;
    }
    return acc.concat([array]);
  }, []);

  console.log(daysArray);
  daysArray[6] = [22, 23,24,25,26,27,28,29,30,31];
  return daysArray;
}

createDOWMArrays();
