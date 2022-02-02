function reverse(string) {
  let newStr = '';
  let i = string.length - 1;
  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }
  console.log(newStr);
  return newStr;
}

reverse('hello');                  // returns "olleh"
reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"

// can also use array.reverse
