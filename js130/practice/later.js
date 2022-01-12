function later(func, arg) {

  return () => {
    func(arg);
  };
}


const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!
