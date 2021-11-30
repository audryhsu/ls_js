const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
};

class Fish {
  constructor(name) {
    this.name = name;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {

}
Object.assign(Maltese.prototype, swimMixin);
Object.assign(Fish.prototype, swimMixin);

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());
console.log(fish1.swim());

console.log(Dog.prototype); // does not have swim method
console.log(Maltese.prototype); // has access to swim

/*
The Fish class and Maltese subclass need access to the swim method in the swimMixin object. We use the Object.assign method to copy over the swim method to the prototype properties of Maltese and Fish constructor functions.
*/
