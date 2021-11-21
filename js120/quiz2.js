let cat = {
  name: 'Pudding',
  colors: 'black and white',
  identify() {
    let report = function() {
      console.log(`${this.name} is a ${this.colors} cat.`);
    };
    report(); // global context
  },
};

cat.identify();
// Expected output: Pudding is black and white.
// Actual: undefined is a undefined cat
