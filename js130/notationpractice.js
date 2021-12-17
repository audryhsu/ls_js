function myFunc(first, str2, str3, str4, last) {
  return {
    first,
    last,
    middle: [str2, str3, str4].sort()
  };
}
let array = ['mary','had', 'a', 'little', 'lamb'];
let { first, last, middle} = myFunc(...array);

console.log(first);
console.log(last);
console.log(middle);
