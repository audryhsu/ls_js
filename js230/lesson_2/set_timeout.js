function delayLog() {
  for (let i = 1; i <= 4; i++) {
    console.log('Incrementing i!');
    setTimeout(() => {
      console.log(`delay after ${i} seconds.`);
    }, i * 1000);
  }
}
delayLog();
