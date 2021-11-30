//52 cards
// for each suit,
  // for each value,
  // concatenate suit + value to create a card.
  // add card to the deck.


function createDeck() {
  let club = '\u2663';
  let spade ='\u2660';
  let heart = '\u2666';
  let diamond ='\u2666';
  let deck = [];
  let suits = [heart, spade, diamond, club]
  let values = [2,3,4,5,6,7,8,9,10, "J", "Q", "K", "A"]

  suits.forEach((suit, i) => {
    values.forEach((value, i) => {
      deck.push([value, suit]);
    });
  });
  return deck;

}

function drawCard(deck) {
  let index = Math.floor(Math.random() * deck.length)
  return deck[index]
}

function removeCardfromDeck(deck, card) {
  deck.splice(deck.indexOf(card), 1);
  console.log(deck.length);

}
let deck = createDeck();
let card = drawCard(deck)
console.log(card);
console.log(removeCardfromDeck(deck, card));
console.log(deck.includes([card]));
