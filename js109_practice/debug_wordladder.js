let ladder = '';

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') ladder += '-';
  ladder = ladder + word;
});

// let words = ['head', 'heal', 'teal', 'tell', 'tall', 'tail']
//
// for (word of words) {
//   if (ladder !== '') ladder += '-';
//   ladder += word;
// }
console.log(ladder)  // expect: head-heal-teal-tell-tall-tail
