/*
if args to verse is a range, including
*/


class BeerSong {
  static lyricOne = `1 bottle of beer on the wall, 1 bottle of beer.\n` +
           `Take it down and pass it around, no more bottles of ` +
           `beer on the wall.\n`;
  static lyricTwo = `2 bottles of beer on the wall, 2 bottles of beer.\n` +
           `Take one down and pass it around, 1 bottle of beer ` +
           `on the wall.\n`
  static lyricZero = `No more bottles of beer on the wall, no more bottles ` +
           `of beer.\nGo to the store and buy some more, 99 bottles ` +
           `of beer on the wall.\n`
  static versesArray = (function() {
    let verses = [];

    for (var num = 0; num < 100; num++) {
      if (num === 0) verses.push(BeerSong.lyricZero)
      else if (num === 1) verses.push(BeerSong.lyricOne)
      else if (num === 2) verses.push(BeerSong.lyricTwo)
      else {
        verses.push(BeerSong._createLyric(num))
      }
    }
    return verses;
  })();

  static _createLyric(num) {
    return `${num} bottles of beer on the wall, ${num}` +
            ` bottles of beer.\nTake one down and pass it around, ` +
            `${num-1} bottles of beer on the wall.\n`
  }

  static verse(num) {
    return BeerSong.versesArray[num];
  }

  static verses(start, end) {
    let fullVerse = "";
    for (var i = start; i >= end; i--) {
      fullVerse += BeerSong.versesArray[i]
    }
    return fullVerse
  }

  static lyrics() {
    return BeerSong.versesArray.reverse().join("\n");
  }
}

console.log(BeerSong.verses(2, 0));
// console.log(BeerSong.verses(99, 98));

module.exports = BeerSong;
