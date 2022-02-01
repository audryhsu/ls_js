let myPromise = new Promise(function(resolve, reject) {
  let finishedTask = false;
  if (finishedTask) {
    resolve('You finished your task!');
  } else {
    reject(new Error("Did not complete!"));
  }
});

let handleSuccess = (message) => console.log('Success: ' + message);
let handleReject = (error) => console.log('Failed: ' + error);

myPromise.then(
  message => handleSuccess(message),
  error => handleReject(error) // optional if only interested in success
);
