// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach((title) => console.log(this.seriesTitle + ': ' + title));
//   }
// };
//
// TESgames.listGames();


let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment.call(foo);
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);
