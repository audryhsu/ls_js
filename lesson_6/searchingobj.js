let obj = {foo: 1, bar: 2, baz: 3};

let arr = Object.entries(obj);

Object.entries(obj).forEach((subArr, i) => {
  if (subArr.includes(3)) console.log(subArr[0]);
});
