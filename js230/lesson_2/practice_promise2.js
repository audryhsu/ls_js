
const promise1 = new Promise((resolve, reject) => {
  console.log("foo");
  reject();
  resolve();
  console.log("bar");
});
console.log("Promise state:", promise1);

promise1.then(() => {
  console.log("baz");
}).catch(() => console.log('error'));

console.log("qux");
