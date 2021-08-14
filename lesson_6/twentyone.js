// twenty-one, a Blackjack like game
// best of five rounds
// by @audryhsu

// Import helper functions
const {prompt, createDeck, dealStartingHand, busted, total, playerTurn, dealerTurn, calculateWinner, playAgain, displayWinner } = require('./lib.js');

// Global variables
let DECK = createDeck();
let PLAYER_SCORE = 0;
let DEALER_SCORE = 0;

// Welcome message
prompt('Welcome to twenty-one! Best out of 5 wins!');


// Game play
while (PLAYER_SCORE < 3 && DEALER_SCORE < 3) {
  console.log('');
  console.log('-------------- SCORE BOARD -------------------');
  console.log(`PLAYER: ${PLAYER_SCORE}`);
  console.log(`DEALER: ${DEALER_SCORE}`);
  console.log('----------------------------------------------');

  let PLAYER_HAND = [];
  let DEALER_HAND = [];
  console.log('===============================================');
  dealStartingHand(DECK, PLAYER_HAND, DEALER_HAND);
  console.log('===============================================');
  let dealerTotal = total(DEALER_HAND);
  let playerTotal = total(PLAYER_HAND);

  playerTotal = playerTurn(PLAYER_HAND, DECK);

  //if player busts, dealer wins
  if (busted(playerTotal)) {
    prompt('You busted!');
    displayWinner('Dealer');
    DEALER_SCORE += 1;

  } else if (!busted(playerTotal)) {
    dealerTotal = dealerTurn(DEALER_HAND, DECK);

    if (busted(dealerTotal)) {
      prompt('Dealer busted!');
      displayWinner('Player');
      PLAYER_SCORE += 1;
    }
  }
  // if neither busts, compare cards and declare the winner
  if (!busted(dealerTotal) && !busted(playerTotal)) {
    let winner = calculateWinner(PLAYER_HAND, DEALER_HAND);
    if (winner === 'Player') PLAYER_SCORE += 1;
    if (winner === 'Dealer') DEALER_SCORE += 1;
  }

  if (PLAYER_SCORE >= 3 || DEALER_SCORE >= 3) break;
  if (!playAgain()) break;
  console.clear();
}
prompt('Thanks for playing!');
console.log(' ');
console.log('-------------- FINAL SCORE -------------------');
console.log(`PLAYER: ${PLAYER_SCORE}`);
console.log(`DEALER: ${DEALER_SCORE}`);
console.log('----------------------------------------------');
