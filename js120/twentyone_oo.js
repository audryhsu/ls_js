const readline = require('readline-sync');

class Card {
  constructor(number, suit) {
    this.number = number;
    this.suit = suit;
    this.points = this.getValue();
  }
  show() {
    return `
     ____
    |${this.number}${this.suit}  |`;
  }
  getValue() {
    if (["J", "Q", "K"].includes(this.number)) return 10;
    if (this.number === "A") return 11;
    return this.number;
  }
 }

class Deck {
  static CLUB = '\u2663';
  static SPADE ='\u2660';
  static HEART = '\u2666';
  static DIAMOND ='\u2666';
  static SUITS = [Deck.HEART, Deck.SPADE, Deck.DIAMOND, Deck.CLUB];
  static NUMBERS = [2,3,4,5,6,7,8,9,10, "J", "Q", "K", "A"];

  constructor() {
    this.cards = [];

    Deck.SUITS.forEach(suit => {
      Deck.NUMBERS.forEach(number => {
        this.cards.push(new Card(number, suit));
      });
    });
  }

  pickCard() {
    let index = Math.floor(Math.random() * this.cards.length);
    let card = this.cards[index];
    this.cards.splice(this.cards[index], 1);
    return card;
  }
}

class Participant {
  static HIDDEN_CARD = `
     ____
    | ?? |`;

  constructor() {
    this.hand = [];
    this.score = null;
    this.hiddenCard = Participant.HIDDEN_CARD;
  }

  isBusted() {
    return this.score > 21;
  }

  scoreHand() {
    // sums total point values of participant's hand
    let sum = this.hand.map(card => card.points).reduce((totalPoints, points) => totalPoints + points, 0);
    this.score = sum;

    this.hand.filter(card => card.number === "A").forEach(_ => {
      if (this.score > 21) this.score -= 10;
    }, this);
    return this.score;
  }

  getScore() {
    console.log("");
    console.log(`Your current hand is worth ${this.score} points.`);
    return this.score;
  }

  showHand() {
    console.log("");
    if (this.name === "You") console.log("Your hand: ");
    if (this.name === "Dealer") console.log("Dealer's hand: ");
    let allCards = [];

    for (var i = 0; i < this.hand.length; i++) {
      if ((this.name === "Dealer") && (i === 1)) {
        allCards.push(this.hiddenCard);
      } else {
        allCards.push(this.hand[i].show());
      }
    }

    for (var i = 0; i < allCards.length; i++) {
      console.log(`${allCards[i]}`);
    }
  }
}

class Player extends Participant {
  constructor() {
    super()
    this.name = "You";
  }
}

class Dealer extends Participant {
  constructor() {
    super()
    this.name = "Dealer"
  }

  reveal() {
    let allCards = [];
    for (var i = 0; i < this.hand.length; i++) {
        allCards.push(this.hand[i].show());
    }
    for (var i = 0; i < allCards.length; i++) {
      console.log(`${allCards[i]}`)
    }
  }
}

class TwentyOneGame {
  static STARTING_BALANCE = 1;
  static WINNING_BALANCE = 2;
  static sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
    this.winner = null;
    this.playerBalance = TwentyOneGame.STARTING_BALANCE;
  }

  resetGame() {
    console.log("Preparing the next game...");
    this.player = new Player();
    this.dealer = new Dealer();
    this.deck = new Deck();
    this.winner = null;
    }

  getBalance() {
    console.log("");
    console.log(`Your balance is: ${this.playerBalance} dollars.`);
    console.log("");
  }

  addToBalance() {
    return this.playerBalance += 1;
  }

  subtractFromBalance() {
    return this.playerBalance -= 1;
  }

  async start() {
    this.displayWelcomeMessage();

    while (true) {
      this.dealStartingHands();
      this.dealer.showHand();
      this.player.showHand();
      this.player.getScore();
      this.playerTurn();

      if (!this.winner) {
        console.clear();
        this.dealerTurn();
      }
      if (!this.winner) {
        this.player.showHand();
        this.displayResult();
      }
      if (this.winner === this.player.name) this.addToBalance();
      if (this.winner === this.dealer.name) this.subtractFromBalance();

      this.getBalance();

      if (this.playerBalance === TwentyOneGame.WINNING_BALANCE || this.playerBalance === 0) break;

      this.resetGame();
      await TwentyOneGame.sleep(6500);
      console.clear();
    }
    this.displayGoodbyeMessage();
  }

  dealStartingHands() {
    this.dealCard(this.player);
    this.dealCard(this.dealer);
    this.dealCard(this.player);
    this.dealCard(this.dealer);
  }

  dealCard(participant) {
    participant.hand.push(this.deck.pickCard());
    if (participant === this.player) this.player.scoreHand();
    if (participant === this.dealer) this.dealer.scoreHand();
  }

  playerTurn() {
    while (true) {
      let choice;
      while (true) {
        choice = readline.question("Would you like to hit (h) or stay (s)?: ")
        choice = choice.toLowerCase();
        if (choice === 'h' || choice === 'hit' || choice === 's' || choice === 'stay') break;
        console.log("Sorry, that's not a valid choice...");
      }
      if (choice[0] === 'h') {
        this.dealCard(this.player);
        console.clear();
        this.player.showHand();
        this.player.getScore();

        if (this.player.isBusted()) {
          console.log("Oh no! You busted!");
          this.winner = "Dealer";
          break;
        }
      }
      else {
        console.log("You picked stay. Your move is over.");
        break;
      }
    }
  }

  dealerTurn() {
    console.log("Dealer's turn...");
    this.dealer.reveal();
    if (this.dealer.score >= 17) console.log("Dealer stays.");
    while (this.dealer.score < 17) {
      console.log("Dealer hits...");
      this.dealCard(this.dealer);
      this.dealer.reveal();
      if (this.dealer.isBusted()) {
        console.log("Dealer busted!");
        this.winner = this.player.name;
        break;
      }
    }
  }

  displayResult() {
    console.log("");
    console.log(`Your score: ${this.player.score}`);
    console.log(`Dealer's score: ${this.dealer.score}`);

    if (this.dealer.score === this.player.score) {
      console.log("It's a tie!");
    }
    else if (!this.winner) {
      if (this.player.score > this.dealer.score) {
        this.winner = this.player.name;
      } else if (this.dealer.score > this.player.score) {
        this.winner = this.dealer.name;
      }
      console.log(`Game over! ${this.winner} win!`);
    }
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Twenty One! Enlargen your screen for optimal game experience.");
    console.log(`Play until you get to ${TwentyOneGame.WINNING_BALANCE} dollars or you run out of money.`);
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("");
    console.log("Thanks for playing! Goodbye.");
  }
}


let game = new TwentyOneGame();
game.start();
