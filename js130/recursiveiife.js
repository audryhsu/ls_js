(function recursivecounter(number) {
  let next = number;
  console.log(number);
  if (next === 1) {
    return 0;
  }
  recursivecounter(next - 1) + 1;
})(7);
