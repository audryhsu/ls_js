// twenty-one, a Blackjack like game
// by @audryhsu

// Import helper functions
const {prompt, createDeck, dealStartingHand, busted, total, playerTurn, dealerTurn, calculateWinner, playAgain, displayWinner } = require('./lib.js');

// Global variables
let DECK = createDeck();

// Game play
while (true) {
  console.clear();
  console.log('-------------- NEW ROUND ----------------------');
  let PLAYER_HAND = [];
  let DEALER_HAND = [];
  dealStartingHand(DECK, PLAYER_HAND, DEALER_HAND);

  playerTurn(PLAYER_HAND, DECK);

  //if player busts, dealer wins
  if (busted(total(PLAYER_HAND))) {
    prompt('You busted!');
    displayWinner('Dealer');
  }
  // dealer turn
  else if (!busted(total(PLAYER_HAND))) {
    dealerTurn(DEALER_HAND, DECK);
    if (busted(total(DEALER_HAND))) {
      prompt('Dealer busted!');
      displayWinner('Player');
    }
  }
  // if neither busts, compare cards and declare the winner
  if (!busted(total(DEALER_HAND)) && !busted(total(PLAYER_HAND))) {
    calculateWinner(PLAYER_HAND, DEALER_HAND);
  }
  if (!playAgain()) break;
}
prompt('Thanks for playing!');
