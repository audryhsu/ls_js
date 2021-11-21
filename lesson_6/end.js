function penultimate(string) {
  let arr = string.split(' ');
  return arr[arr.length -2];

}

console.log(penultimate('last word') === 'last');
console.log(penultimate('last word'));
console.log(penultimate('Launch school is great!') === 'is');
