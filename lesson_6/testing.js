
function total(cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
      console.log("Ace + 11");
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
      console.log('Face card. +10');
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
    console.log('Correct for Ace. -11');
  });

  return sum;
}

let hand = [['H','A'],['S', 'J']];
console.log(total(hand));
// 21

let hand2 = [['S', 'Q'], ['S','9'], ['S', 'A'], ['S','A']];
console.log(total(hand2));
// 20

let hand3 = [['S','A'], ['S','A'], ['S','A'], ['S','A']];
console.log(total(hand3));
// 12
