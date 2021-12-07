const fs = require('fs');

let data = fs.readFile('day1_input.txt', 'utf8', function(err, data) {
  console.log(data);
});
console.log('Done');
