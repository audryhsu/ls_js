// arguments array and object
// array 2 or more elements, presumable concatenated will be a f/l name
  // use join method
// object keys: title, occupation
// return a greeting

function greetings(fullName, career) {
  return `Hello, ${fullName.join(' ')}! Nice to have a ${career['title']} ${career['occupation']} around.`;

}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
