function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor; // prod = prod * factor
    return prod;
  };
}

let bar = foo(2); // function definition + closure (prod, 2)
let result = bar(3); // return 6 + closure (prod, 6)
result += bar(4); // bar returns 24 + result (6) = 30. Bar's closure (prod, 24)
result += bar(5); // bar return 120 + 30 = 150.
console.log(result); //150
