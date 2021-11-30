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
Deck.CLUB = '\u2663';
Deck.SPADE = '\u2660';
Deck.HEART = '\u2666';
Deck.DIAMOND = '\u2666';
Deck.SUITS = [Deck.HEART, Deck.SPADE, Deck.DIAMOND, Deck.CLUB];
Deck.NUMBERS = [2,3,4,5,6,7,8,9,10, "J", "Q", "K", "A"];

class Participant {

  constructor() {
    this.hand = [];
    this.score = null;
    this.hiddenCard = Participant.HIDDEN_CARD;

  }

  resetHand() {
    this.hand = [];
    this.score = null;
  }

  isBusted() {
    return this.score > Participant.BLACK_JACK;
  }

  scoreHand() {
    let sum = this.hand
      .map(card => card.points)
      .reduce((totalPoints, points) => totalPoints + points, 0);

    this.score = sum;

    this.hand
      .filter(card => card.number === "A")
      .forEach(_ => {
        if (this.score > Participant.BLACK_JACK) this.score -= 10;
      }, this);

    return this.score;
  }

  getScore() {
    console.log("");
    console.log(`Your current hand is worth ${this.score} points.`);
    return this.score;
  }

  showHand() {
    let allCards = [];
    console.log("");

    for (let idx = 0; idx < this.hand.length; idx++) {
      if ((this.name === "Dealer") && (idx === 1)) {
        allCards.push(this.hiddenCard);
      } else {
        allCards.push(this.hand[idx].show());
      }
    }

    if (this.name === "You") console.log("Your hand: ");
    if (this.name === "Dealer") console.log("Dealer's hand: ");

    for (let idx = 0; idx < allCards.length; idx++) {
      console.log(`${allCards[idx]}`);
    }
  }
}

Participant.HIDDEN_CARD = `
     ____
    | ?? |`;
Participant.BLACK_JACK = 21;

class Player extends Participant {
  constructor() {
    super();
    this.playerBalance = TwentyOneGame.STARTING_BALANCE;
    this.name = "You";
  }

  getBalance() {
    console.log("");
    console.log(`Your balance is: ${this.playerBalance} dollars.`);
    console.log("");
  }

  addToBalance() {
    this.playerBalance += 1;
  }

  subtractFromBalance() {
    this.playerBalance -= 1;
  }

  balanceIsMax() {
    return this.playerBalance === TwentyOneGame.WINNING_BALANCE;
  }

  balanceIsEmpty() {
    return this.playerBalance === 0;
  }
}

class Dealer extends Participant {
  constructor() {
    super();
    this.name = "Dealer";
  }

  reveal() {
    let allCards = [];
    for (let idx = 0; idx < this.hand.length; idx++) {
      allCards.push(this.hand[idx].show());
    }

    for (let idx = 0; idx < allCards.length; idx++) {
      console.log(`${allCards[idx]}`);
    }
  }
}
Dealer.MINIMUM_HAND_SCORE = 17;

class TwentyOneGame {
  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
    this.winner = null;
  }

  resetGame() {
    console.log("Preparing the next game...");
    this.player.resetHand(); // new resetHand method instead of instatiating new Player and Dealer objects
    this.dealer.resetHand();
    this.deck = new Deck();
    this.winner = null;
  }

  async start() {
    this.displayWelcomeMessage();

    while (true) {
      this.setupOneGame();
      this.playOneGame();

      if (this.player.balanceIsEmpty() || this.player.balanceIsMax()) break;

      this.resetGame();
      await TwentyOneGame.sleep(6500);
      console.clear();
    }
    this.displayGoodbyeMessage();
  }

  playOneGame() {
    this.playerTurn();

    if (!this.winner) {
      console.clear();
      this.dealerTurn();
    }
    if (!this.winner) {
      this.player.showHand();
      this.displayResult();
    }

    this.updateBalance();
    this.player.getBalance();

  }

  setupOneGame() {
    this.dealStartingHands();
    this.dealer.showHand();
    this.player.showHand();
    this.player.getScore();
  }

  updateBalance() {
    if (this.winner === this.player.name) this.player.addToBalance();
    if (this.winner === this.dealer.name) this.player.subtractFromBalance();
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

  hitOrStay() {
    let validResponses = ['h', 'H', 's', 'S', 'hit', 'stay'];
    let choice;
    while (true) {
      choice = readline.question("Would you like to hit (h) or stay (s)?: ");
      if (validResponses.includes(choice)) break;
      console.log("Sorry, that's not a valid choice...");
    }
    return choice;
  }

  playerTurn() {
    while (true) {
      let choice = this.hitOrStay();

      if (choice.toLowerCase()[0] === 'h') {
        this.dealCard(this.player);
        console.clear();
        this.player.showHand();
        this.player.getScore();

        if (this.player.isBusted()) {
          console.log("Oh no! You busted!");
          this.winner = "Dealer";
          break;
        }
      } else {
        console.log("You picked stay. Your move is over.");
        break;
      }
    }
  }

  dealerTurn() {
    console.log("Dealer's turn...");
    this.dealer.reveal();
    if (this.dealer.score >= Dealer.MINIMUM_HAND_SCORE) console.log("Dealer stays.");
    while (this.dealer.score < Dealer.MINIMUM_HAND_SCORE) {
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
    } else if (!this.winner) {
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

TwentyOneGame.STARTING_BALANCE = 5;
TwentyOneGame.WINNING_BALANCE = 10;
TwentyOneGame.sleep = function(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

let game = new TwentyOneGame();
game.start();
