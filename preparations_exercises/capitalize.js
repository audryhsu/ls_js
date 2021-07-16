function capitalize(string) {
  let arr = string.split(' ');
  let result = [];
  for (let word of arr) {
    let capword = word[0].toUpperCase() + word.slice(1);
    result.push(capword);

  }
  return result.join(' ');
}

console.log(capitalize('launch school tech & talk'));
