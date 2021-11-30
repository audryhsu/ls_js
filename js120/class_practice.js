class Greeting {
  greet(message) {
    console.log(message);
  }
}

class Hello extends Greeting {
  constructor() {
    super();
  }
  hi() {
    this.greet('Hello.');
  }
}
class Goodbye extends Greeting {
  constructor() {
    super();
  }
  bye() {
    this.greet("Goodbye ");
  }
}

let greeter = new Greeting()
greeter.greet('hi')

let hi = new Hello()
hi.hi()
let bye = new Goodbye()
bye.bye()
