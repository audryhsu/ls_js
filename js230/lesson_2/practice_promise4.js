// Write non-blocking code with async await

function after1s(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
}

// Version 1: awaited functions are running synchronously (a resolves first, then b starts), so blocking occurs
async function test(input) {
  const a = await after1s(2);
  console.log('a is done.', a); //a is done. 2
  const b = await after1s(3);
  console.log('b is done.', b); //b is done. 3
  return input * a * b; //18
}
// Version 2: refactored so that async functions are fired off simultaneously
async function test(input) {
  const a = after1s(2);
  console.log('a is started.', a); //Promise {<pending>}
  const b = after1s(3);
  console.log('b is started.', b); //Promise {<pending>}
  console.log('Both are done');
  return input * await a * await b; //18
}

test(3).then((value) => console.log(value));
