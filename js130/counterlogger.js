function makeCounterLogger(num) {
  return function count(endNum) {
    let startNum = num;
    let increment = 1;
    if (endNum < startNum) increment = -1;
    do {
      console.log(startNum);
      startNum += increment;
    } while (startNum != endNum);
    console.log(startNum);
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8

countlog(2);
// 5
// 4
// 3
// 2
