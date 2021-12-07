/*
game
player has a character
character has name, health, strength, intelligence
- character type: warrior, a paladin, a magician, or a bard.
- heal(points) - changes characters health value
- hurt(points) -  decrease character health

methods:
- calculate random strength value and intelligence values
- rollDice() obtains random values between 2 and 12 inclusive

*/
class RPG {
  constructor() {
    this.diceRoll = null;
    this.magician = new Magician('mikey'); // UPDATE: added names
    this.warrior = new Warrior('wendy');
    this.paladin = new Paladin('pete');
    this.bard = new Bard('benny');
  }

  play() {
    // STUB simulate game play
    console.log(this.warrior);
    console.log(this.magician);
  }
}

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.rollMax = 13;
    this.rollMin = 2;
    this.strength = this.rollDice();
    this.intelligence = this.rollDice();
  }
  // UPDATE: fixed rollDice to be a instance method.
  rollDice() {
    return Math.floor(Math.random() * (this.rollMax - this.rollMin) + this.rollMin);
  }

  heal(points) {
    this.health += points;
  }
  hurt(points) {
    this.health -= points;
  }
}
let armorMixin = {
  attachArmor: function() {
    console.log("Armor up!");
  },
  removeArmor: function() {
    console.log("Removing armor.");
  }
};

class Warrior extends Character {
  constructor(name) {
    super(name);
    this.strength += 2;
  }
}

class SpellCaster extends Character {
  constructor(name) {
    super(name);
  }
  castSpell(spell) {
    console.log(`Casting ${spell}!`);
  }
}

class Paladin extends SpellCaster {
  constructor(name) {
    super(name);
  }
}

class Magician extends SpellCaster {
  constructor(name) {
    super(name);
    this.intelligence += 2;
  }
}

// UPDATE: bard class now extends Magician.
class Bard extends Magician {
  constructor(name) {
    super(name);
  }
  createPotion() {}
}

// Give warriors and paladins ability to manage armor
Object.assign(Warrior.prototype, armorMixin);
Object.assign(Paladin.prototype, armorMixin);

let game = new RPG();
game.play();
