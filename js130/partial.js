function makeMultipleLister(n) {
  return function() {
    let multiple = n;
    while (multiple < 100) {
      console.log(multiple);
      multiple += n;
    }
  };
}

let lister = makeMultipleLister(17);
lister();
