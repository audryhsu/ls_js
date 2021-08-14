// helper functions for twenty-one, a Blackjack-like game.

// export file as a module
module.exports = { prompt, createDeck, shuffleDeck, dealStartingHand,
  dealCard, total, busted, playerTurn,
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

function showHands(playerHand, dealerHand) {
  prompt(`Dealer has: ${dealerHand[0]} and unknown.`);
  // let hand = playerHand.map(card => card[1]).join(', ');
  prompt(`You have: ${playerHand}`);
  prompt(`Your hand value: ${total(playerHand)}.`);
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
  return card;
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


function playerTurn(playerHand, deck) {
  let playerTotal;
  while (true) {
    let answer = readline.question('Player: hit or stay?\n');
    if (answer.trim().toLowerCase() === 'stay') break;
    dealCard(playerHand, deck);
    playerTotal = total(playerHand);
    prompt(`Your hand: ${playerHand}. Hand value: ${playerTotal}.`);
    // Check if busted
    if (busted(playerTotal)) break;
  }
  return playerTotal;
}

function dealerTurn(dealerHand, deck) {
  prompt('Dealer turn...');
  let dealerTotal = total(dealerHand);
  while (dealerTotal <= 17) {
    dealCard(dealerHand, deck);
    dealerTotal = total(dealerHand);
    if (busted(dealerTotal)) break;
  }
  prompt('Dealer stays.');
  return dealerTotal;
}

function calculateWinner(playerHand, dealerHand) {
  let playerTotal = total(playerHand);
  let dealerTotal = total(dealerHand);
  prompt('Time to reveal your hands...!');
  prompt(`Dealer hand value: ${dealerTotal}`);
  prompt(`Player hand value: ${playerTotal}`);
  if (!busted(playerTotal) && !busted(dealerTotal)) {
    if (playerTotal > dealerTotal) {
      displayWinner('Player');
      return 'Player';
    }
    if (dealerTotal > playerTotal) {
      displayWinner('Dealer');
      return 'Dealer';
    } else {
      return prompt('Tied game.');
    }
  }
}
function displayWinner(winner) {
  prompt(`${winner} won the game!`);
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
