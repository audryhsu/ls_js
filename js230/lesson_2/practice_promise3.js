// what if i pass in an already resolved or non-promise?

let promise = new Promise((resolve) => resolve(1) );
// same as promise = new Promise(res => res(1))


let finalResult = promise
  .then((num) => {
    console.log(num); //1
    return num + 2;
  })
  .then((num) => {
    console.log(num); //3
    return num + 3;
  })
  .then((num) => {
    console.log(num); //6
    return num + 4; // NOTE: return value is NOT passed onto finally. This is the final value of the promise object
  })
  .finally((num) => { // finally expects a callback fn. num here is undefined.
    console.log(num); // 'undefined'
    return num + 5; // NaN
  });

console.log(finalResult); // Promise {<fulfilled>: 10}
