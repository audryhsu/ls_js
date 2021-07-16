

function getname(prompt) {
  let rlSync = require('readline-sync');
  let fname = rlSync.question(prompt);
  return fname
}

fname = getname("What's your fname?")
lname = getname('Whats your last name?')

console.log(`Good Morning, ${fname} ${lname}`);
