function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}

let logMyName = () => {
  console.log('im audry');
};
function delayLog() {
  for (let i = 1; i <= 10; i++) {

    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

delayLog();
afterNSeconds(logMyName, 5);
