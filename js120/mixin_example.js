const Swimmable = {
  swim() {}
}

class Bird {}

class FlyingBird extends Bird {
  fly() {}
}

class Stork extends FlyingBird {}

class Penguin extends Bird {}
Object.assign(Penguin.prototype, Swimmable);

class Goose extends FlyingBird {}
Object.assign(Goose.prototype, Swimmable);

console.log(Goose); // [class Goose extends FlyingBird]
console.log(Goose.__proto__); // [class FlyingBird extends Bird]
console.log(Goose.prototype); //FlyingBird { swim: [Function: swim] }
console.log(Goose.prototype.constructor); //[class Goose extends FlyingBird]
