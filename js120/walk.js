//create a mixin that contains method walk.

let walkMixin = {
  walk: function() {
    return `Let's go for a walk!`;
  }
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

let obj = Object.assign(Cat.prototype, walkMixin);
console.log(obj);

let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());

/*
We would like the Cat constructor function/class to inherit from the WalkMixin. To do this, we set the Cat constructor's prototype to the walkMixin object using the Object.assign method.
*/
