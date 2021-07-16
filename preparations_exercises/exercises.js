let obj = {
  b: 2,
  a: 1,
  c: 3,
};

objKeys = Object.keys(obj);

// use map function to create a new array converting keys to upper
// let upper = objKeys.map((key) => key.toUpperCase());

// use forEach to loop through array, capitalize, and push to new
let upper = [];
objKeys.forEach((key) => {
  upper.push(key.toUpperCase());
});
