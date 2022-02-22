let munstersDescription = "The Munsters are creepy and spooky.";

// return a new string that swaps case of all letters
// use the map function to return a new array after checking char case

function myFunction(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  }
  else {
    return char.toUpperCase();
  }
}
arr = munstersDescription.split("").map(myFunction).join(' ')

console.log(arr);
