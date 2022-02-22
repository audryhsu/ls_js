// Executor
let mypromise = new Promise((resolve, reject) => {

  console.log('Fetching...');
  setTimeout(() => {
    console.log('Processing...');
    let data = 'Launch School';
    let error = 'Threw an error';
    console.log('Done!');

    resolve(data);
  }, 2000);

  return 'Ignored return value';
});

console.log('Initial promise state:' ,mypromise);

// Consumer code
mypromise
  .then((value) => console.log("Do something with my data:", value))
  .catch((err) => console.log("Error Message: ", err));
