// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   greet() {
//     return `Hello! My name is ${this.name}!`;
//   }
// }

let walkMixin = {
  walk: function() {
    return "Let's go on a walk!";
  }
};
// Pseudoclassical set up
// function Cat(name) {
//   this.name = name;
// }
// Cat.prototype.greet = function () {
//   return `Hello! My name is ${this.name}`
// };
// Object.assign(Cat.prototype, walkMixin); // also works for PS and ES6
// let kitty = new Cat("Sophie");

// OLOO
let catHub = {
  init: function(name) {
    this.name = name;
    return this;
  },
  greet: function() {
    return `Hello! My name is ${this.name}!`;
  }
};

Object.assign(catHub, walkMixin);

let kitty = Object.create(catHub).init('fuzzykins');
console.log(kitty.greet());
console.log(kitty.walk());
