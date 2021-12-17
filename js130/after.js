function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}

let myfun = () => console.log('hi!');

afterNSeconds(myfun, 3);
