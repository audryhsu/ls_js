// Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

//input: string
//output: uppercase to lowercase, lowercase to upper case.
//rule:
//algo: loop through each char

function swapCase(str) {
  let result = str.split("").map(char => {
    if (char === char.toUpperCase()) return char.toLowerCase();
    else if (char === char.toLowerCase()) return char.toUpperCase();
  }).join("")
  console.log(result);
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
