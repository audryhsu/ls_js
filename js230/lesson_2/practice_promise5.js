const testPromise = () => Promise.resolve("1");

function test1() {
  testPromise().then((result) => console.log("test1", result)); //2 - returns pending promise, // 6 promise resolves

  console.log(" test1: 2"); //3
}

async function test2() {
  console.log(await testPromise()); // 5 - pending promise, 7 returns resolved promise
  console.log("test 2: 2"); // 8
}

test1(); // 1
test2(); // 4 - next on call stack
