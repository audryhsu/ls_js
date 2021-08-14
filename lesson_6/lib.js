// helper functions for twenty-one, a Blackjack-like game.

// export file as a module
module.exports = { prompt, createDeck, shuffleDeck, dealStartingHand,
  dealCard, total, busted, showHands, playerTurn,
  dealerTurn, calculateWinner, playAgain, displayWinner };

// import readline sync module
const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function createDeck() {
  var suits = ['S', 'D', 'C', 'H'];
  var values = 'A123456789JQK'.split('');
  var deck = [];
  var card;

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      card = [suits[i], values[j]];
      deck.push(card);
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }
}

function dealStartingHand(deck, playerHand, dealerHand) {
  shuffleDeck(deck);
  while (playerHand.length < 2) {
    dealCard(playerHand, deck);
    dealCard(dealerHand, deck);
  }
  return showHands(playerHand, dealerHand);
}

function dealCard(hand, deck) {
  let card = deck.shift();
  hand.push(card);
  console.log(`Card dealt.`);
}

function total(hand) {
  // hand = [['H', '3'], ['S', 'Q'], ... ]
  let values = hand.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function busted(handSum) {
  if (handSum > 21) return true;
  return false;
}

function showHands(playerHand, dealerHand) {
  prompt(`Dealer has: ${dealerHand[0][1]} and unknown.`);
  let hand = playerHand.map(card => card[1]).join(', ');
  prompt(`You have: ${hand}`);
  prompt(`Your hand value: ${total(playerHand)}.`);
}

function playerTurn(playerHand, deck) {
  while (true) {
    let answer = readline.question('Player: hit or stay?\n');
    if (answer.trim().toLowerCase() === 'stay') break;
    dealCard(playerHand, deck);
    prompt(`Your hand: ${playerHand}. Hand value: ${total(playerHand)}.`);
    // Check if busted
    if (busted(total(playerHand))) break;
  }
  return playerHand;
}

function dealerTurn(dealerHand, deck) {
  prompt('Dealer turn...');
  while (total(dealerHand) <= 17) {
    // console.log('Dealer hand is <= 17. Dealer +1 card.');
    dealCard(dealerHand, deck);
    if (busted(total(dealerHand))) break;
  }
  prompt('Dealer stays.');
  return dealerHand;
}

function calculateWinner(playerHand, dealerHand) {
  prompt('Time to reveal your hands...!');
  showHandValues(playerHand, dealerHand);
  if (!busted(total(playerHand)) && !busted(total(dealerHand))) {
    if (total(playerHand) > total(dealerHand)) {
      return displayWinner('Player');
    }
    if (total(dealerHand) > total(playerHand)) {
      return displayWinner('Dealer');
    } else {
      return prompt('Tied game.');
    }
  }
}
function displayWinner(winner) {
  prompt(`${winner} won the game!`);
}

function showHandValues(playerHand, dealerHand) {
  prompt(`Dealer hand value: ${total(dealerHand)}`);
  prompt(`Player hand value: ${total(playerHand)}`);
}

function inputIsValid(input) {
  let validInputs = ['y', 'Y', 'n', 'N'];
  return validInputs.includes(input.trim());

}

function playAgain() {
  let answer;
  do {
    answer = readline.question("Would you like to play again? Y/N ");
  } while (!inputIsValid(answer));

  if (answer.toLowerCase() === 'n') return false;
  return true;
}
