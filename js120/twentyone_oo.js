const readline = require('readline-sync');

class Card {
  constructor(number, suit) {
    // card = [2 , spades]
    this.number = number;
    this.suit = suit;
    this.points = this.getValue();
    // What sort of state does a card need?
    // Rank? Suit? Points?
  }
  show() {
    return `
     ____
    |${this.number}${this.suit}  |
    |____|`;
  }
  getValue() {
    if (["J", "Q", "K"].includes(this.number)) return 10;
    if (this.number === "A") return 11; //// TODO: need to update ace to also have optional 1 value
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
    // removes card from deck and returns card object
    let index = Math.floor(Math.random() * this.cards.length);
    let card = this.cards[index];
    this.cards.splice(this.cards[index], 1);
    return card;
  }

  reshuffle() {
    // TODO: reshuffle deck when number of cards is 0
  }
}

class Participant {
  static STARTING_BALANCE = 5;
  constructor(startingBalance=null) {
    this.hand = [];
    this.score = null;
    this.balance = Participant.STARTING_BALANCE;
  }

  stay() {
    //stub
  }

  isBusted() {
    return this.score > 21;
  }

  scoreHand() {
    // sums total point values of participant's hand
    let sum = this.hand.map(card => card.points).reduce((totalPoints, points) => totalPoints + points, 0);
    this.score = sum;
    return this.score;
  }
  getScore() {
    console.log(`Your current hand is worth ${this.score} points`);
    return this.score;
  }
  getBalance() {
    return this.balance;
  }

  addToBalance() {
    return this.balance += 1;
  }

  subtractFromBalance() {
    return this.balance -= 1;
  }
}

class Player extends Participant {
  constructor() {
    super(Participant.STARTING_BALANCE)
    //STUB
    // What sort of state does a player need?
  }

  showHand() {
    console.log("Your hand: ");
    let allCards = [];
    for (var i = 0; i < this.hand.length; i++) {
      allCards.push(this.hand[i].show());
    }
    for (var i = 0; i < allCards.length; i++) {
      console.log(`${allCards[i]}`)
    }
    // console.log(`${this.hand[0].show()}  ${this.hand[1].show()}`);
  }
}

class Dealer extends Participant {
  // Very similar to a Player; do we need this?
  static HIDDEN_CARD =
    `
     ____
    | ?? |
    |____|`;

  constructor() {
    super()
    this.hiddenCard = Dealer.HIDDEN_CARD;
    // What sort of state does a dealer need?
    // Score? Hand? Deck of cards? Bow tie?
  }
  showHand() {
    console.log("Dealer's hand: ");
    let allCards = [];
    for (var i = 0; i < this.hand.length; i++) {
      if (i % 2 === 1) {
        allCards.push(this.hiddenCard);
      } else {
        allCards.push(this.hand[i].show());
      }
    }
    for (var i = 0; i < allCards.length; i++) {
      console.log(`${allCards[i]}`)
    }
    // console.log(`${this.hand[0].show()}  ${this.hiddenCard}`);
  }

  hide() {
    //STUB
  }

  reveal() {
    console.log("Dealer's hand: ");
    console.log(`${this.hand[0].show()}  ${this.hand[1].show()}`);
  }

}

class TwentyOneGame {
  constructor() {
    // A deck? Two participants?
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
    this.winner = null;
  }

  start() {
    this.displayWelcomeMessage();
      this.dealStartingHands();


    this.dealer.showHand();
    this.player.showHand();
    this.player.getScore(); // show players hand's score

    // this.showCards();
    this.playerTurn();

    // if player busted, dealer auto wins
    if (!this.winner) {
      this.dealerTurn();
    }
    if (!this.winner) {
      this.displayResult();
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
    // add a random card to participant's hand.
    participant.hand.push(this.deck.pickCard());
    if (participant === this.player) this.player.scoreHand();
    if (participant === this.dealer) this.dealer.scoreHand();
  }

  showCards() {
    //STUB
  }

  playerTurn() {
    while (true) {
      let choice;
      while (true) {
        choice = readline.question("Would you like to hit (h) or stay (s)? ")
        if (choice.toLowerCase()[0] === 'h' | choice.toLowerCase()[0] === 's') break;
        console.log("Sorry, that's not a valid choice...");
      }
      if (choice.toLowerCase()[0] === 'h' ) {
        this.dealCard(this.player);
        this.player.showHand();
        this.player.getScore();

        if (this.player.isBusted()) {
          console.log("Oh no! You Busted! Dealer wins!");
          this.winner = "Dealer"; // TODO: implement
          break;
        }
      }
      else {
        console.log("You are staying. Your move is over."); break;
      }

    }

  }

  dealerTurn() {
    console.log("");
    console.log("Dealer's turn...");
    while (this.dealer.score < 17) {
      console.log(`Dealer's score: ${this.dealer.score}`);
      console.log("Dealer hits...");
      this.dealCard(this.dealer);
      this.dealer.showHand();
      if (this.dealer.isBusted()) {
        console.log("Dealer busted! You win!");
        this.winner = "You";
        break;
      }
    }
    console.log("Dealer stays.");
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Twenty One!");
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("");
    console.log("Thanks for playing! Goodbye.");
  }

  displayResult() {
    console.log("");
    console.log(`Your score: ${this.player.score}`);
    console.log(`Dealer's score: ${this.dealer.score}`);
    if (this.player.score > this.dealer.score) {
      this.winner = "You";
    } else {
      this.winner = "Dealer";
    }
    console.log(`Game over! ${this.winner} win!`);
  }
}

let game = new TwentyOneGame();
game.start();
