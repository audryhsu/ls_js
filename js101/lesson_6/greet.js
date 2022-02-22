const readline = require('readline-sync');

function greet() {
  name = readline.question("What is your name? ");
  if (name.includes('!')) {
    name = name.slice(0, name.length -1).toUpperCase();
    return `HELLO ${name}. WHY ARE WE SCREAMING?`;
  }
  return `Hello ${name}.`

}

console.log(greet());
