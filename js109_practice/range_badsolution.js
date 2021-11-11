function range(start, end) {
  if (!end) {
    console.log('if block!');
    start = 0;
    end = start;
  }
  return [start, end];
}
console.log(range(10));
