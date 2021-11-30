class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
  getDescription() {
    return `a ${this.species} named ${this.name}`;
  }
}
class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }
  numberOfPets() {
    return this.pets.length;
  }

  addPet(pet) {
    this.pets.push(pet);
  }
  getPets() {
    this.pets.forEach((pet) => {
      console.log(`${pet.getDescription()}`);
    });
  }
}
class Shelter {
  constructor() {
    this.adopters = [];
    this.pets = []; // unadopted pets at the shelter
  }
  adopt(owner, pet) {
    owner.addPet(pet);
    if (!this.adopters.includes(owner)) this.adopters.push(owner);
  }

  printAdoptions() {
    this.adopters.forEach(owner => {
      console.log(`${owner.name} has adopted the following pets: `);
      owner.getPets();
    });
  }

  add(...pet) {
    this.pets.push(...pet);
  }
  numberOfUnadopted() {
    return this.pets.length;
  }
  printUnadopted() {
    console.log(`The Animal Shelter has the following unadopted pets:`);
    this.pets.forEach((pet, i) => {
      console.log(`${pet.getDescription()}`);
    });

  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');
let asta = new Pet('dog', 'Asta');
let laddie = new Pet('dog', 'Laddie');
let fluffy = new Pet('cat', 'Fluffy');
let kat = new Pet('cat', 'Kat');
let ben = new Pet('cat', 'Ben');
let chatterbox = new Pet('parakeet', 'Chatterbox');
let bluebell = new Pet('parakeet', 'Bluebell');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.add(asta, laddie, fluffy, kat, ben, chatterbox, bluebell);

shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
// shelter.printAdoptions();
shelter.printUnadopted();
console.log(`The Animal shelter has ${shelter.numberOfUnadopted()} unadopted pets.`);
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

//
// P Hanson has adopted the following pets:
// a cat named Butterscotch
// a cat named Pudding
// a bearded dragon named Darwin
//
// B Holmes has adopted the following pets:
// a dog named Molly
// a parakeet named Sweetie Pie
// a dog named Kennedy
// a fish named Chester
//
// P Hanson has 3 adopted pets.
// B Holmes has 4 adopted pets.
