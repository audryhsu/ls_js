function fizzBuzz() {
  for (var i = 0; i < 101; i++) {
    console.log("Number: ", i);
    if ((i % 3 === 0) && (i % 5 === 0)) console.log(">>>>fizzbuzz");
    else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('>>>>buzz');
    } else {
      console.log("just ", i);
    }
  }
}

fizzBuzz();
