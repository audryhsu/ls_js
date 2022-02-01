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
let handleFinally = () => console.log('This promise is fulfilled.');

myPromise
  .then(message => handleSuccess(message))
  .catch(error => handleReject(error))
  .finally(handleFinally);
