let g = () => {
  console.log('g');
};
let q = () => {
  console.log('q');
};
let d = () => {
  console.log('d');
};
let n = () => {
  console.log('n');
};

let z = () => {
  console.log('z');
};

let f = () => {
  console.log('f');
};
let s = () => {
  console.log('s');
};

//1
console.log('first timeout');
setTimeout(() => {

  console.log('q timeout');
  setTimeout(() => {
    q(); //9
  }, 15);

  d(); //6


  console.log('n timeout');
  setTimeout(() => {
    n(); //8
  }, 5);

  z(); //7
}, 10);

//2
console.log('second timeout');
setTimeout(() => {
  s(); // 10
}, 20);

//3
console.log('third timeout');
setTimeout(() => {
  f(); //5 // NOTE: default value of 0 means execute next even cycle
});

// 4
g();
