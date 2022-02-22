function delayLog() {
  // var i; undefined
  for (var i = 1; i <= 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }
}

delayLog();
