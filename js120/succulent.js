
// function Plant(name) {
// 	this.name = name;
// }
// Plant.prototype.getName = function() {
// 	return this.name;
// }

class Plant {
	constructor(name) {
		this.name = name;
	}
	getName() {
		console.log(`I'm ${this.name} and I live in dirt!`);
	}
	static getDescription() {
		return "All plants are beautiful."
	}
}
const babyPlant = new Plant('Patar');
babyPlant.getName(); // I'm Patar and I live in dirt!

class Succulent extends Plant {
	constructor(name, favoriteClimate) {
		super(name);
		this.favoriteClimate = favoriteClimate;
	}
	static getDescription() {
		return "Succulents are hardy plants."
	}
  getClimate() {
    console.log(`I like to be in ${this.favoriteClimate} conditions`);
  }
}
const cactus = new Succulent('Collin', 'dry and sunny');
cactus.getName(); // I'm Collin and I live in dirt!
cactus.getClimate() // I like to be in dry and sunny conditions

// PROTOTYPAL CHAIN FOR Succulent CLASS
console.log(typeof(Succulent)); // function still!
console.log(typeof(Plant)); // function still!
console.log(Object.getPrototypeOf(Succulent)); // [class Plant] if used class declaration; [Function: Plant] if used constructor + prototype pattern;
console.log(Succulent.__proto__ === Plant); // true
console.log(Succulent.prototype.__proto__ === Plant.prototype); // true
console.log(Object.getPrototypeOf(Plant.prototype) === Object.prototype); // true


// PROTOTYPAL CHAIN FOR cactus INSTANCE
console.log(cactus instanceof Plant); // true
console.log(cactus instanceof Succulent); // true
console.log(cactus.constructor); // [class Succulent extends Plant]

// Checks if an object exists in another object's prototype chain
// this is saying Succulent.prototype and Plant.prototype are part of cactus' chain.
console.log(Succulent.prototype.isPrototypeOf(cactus)); // true
console.log(Plant.prototype.isPrototypeOf(cactus)); // true

// What is the prototype of cactus?
console.log(Object.getPrototypeOf(cactus) === Succulent.prototype); // true
console.log(cactus.__proto__ === Succulent.prototype); // true (code is equivalent to above)


console.log(Succulent.prototype.constructor === Succulent);
console.log(Succulent.constructor);
// Static (class) Methods
// console.log(cactus.getDescription()); // TypeError: cactus.getDescription is not a function
// console.log(Plant.getDescription()); // "All plants are beautiful."
// console.log(Succulent.getDescription()); // "All plants are beautiful."
//
// // If we define a static method with the same name under Succulent sub-class, the Succulent.getDescription is found as it's own property under the Succulent and does not need to go up the prototype chain and look for the method in the Plant constructor.
// console.log(Plant.getDescription()); // "All plants are beautiful."
// console.log(Succulent.getDescription()); // "Succulents are hardy plants."
