function isBlank(string) {
  console.log(string.length > 0 ? false : true);
}
isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true
