class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }

  introduce() {
    return `${super.introduce()} Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
    this.legs = 4;
  }
  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
}
let animal = new Animal("Randy", 100, 3, "mammal", "rickety");
let cat = new Cat("Pepe", 2, "happy");
let dog = new Dog("Spot", 5, "hungry", "Audry" );

console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
console.log(cat.species);
console.log(dog.introduce());
console.log(dog.greetMaster());
console.log(dog.species);
