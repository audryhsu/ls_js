function later2(notifyFunc, message) {
  return function warning(time) {
    notifyFunc(message, time);
  };
}
const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!
