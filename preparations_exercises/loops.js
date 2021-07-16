function removeLast(string) {

  arr = string.split('');
  arr.pop();
  return arr.join('');

  // return string.pop(string.slice(-1));
}

function removeChar(string) {
  return string.substring(0, string.length - 1);
}

console.log(removeLast('ciao!'));
console.log(removeChar('ciao!'));
