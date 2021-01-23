// PEDAC
// understand the problem
// a program that can generate the lyrics of the 99 Bottles of Beer song

// Examples/ test cases

// Data structuer
// string to represent the lyrics of the song

// Algorithm
// static song patterns
// static verse
// -> accept one argument between 0-99
// -> return the songs lyrics from this spacific verse
// static verses
// accepts two argements represent a range (between 0-99)
//  -> the two arguemnts are not equal
//  -> return the songs lyrics from first highest verse until the lowest verse
// static lyrics
//  -> return the whole song lyrics

class Verse {
  constructor(bottles) {
    this.bottles = bottles;
  }

  static SONG_LYRICS = [
    "bottles of beer on the wall",
    "bottles of beer.\n",
    "Take one down and pass it around,",
    "Take it down and pass it around,",
    "Go to the store and buy some more,",
    "bottle of beer on the wall",
    "bottle of beer.\n"
  ]

  singleVerse(){
    switch(this.bottles) {
      case 0:
        return `No more ${Verse.SONG_LYRICS[0]}, no more ${Verse.SONG_LYRICS[1]}` +
        `${Verse.SONG_LYRICS[4]} 99 ${Verse.SONG_LYRICS[0]}.\n`;
        break;
      case 1:
        return `${this.bottles} ${Verse.SONG_LYRICS[5]}, ${this.bottles} ${Verse.SONG_LYRICS[6]}` +
       `${Verse.SONG_LYRICS[3]} no more ${Verse.SONG_LYRICS[0]}.\n`;
       break;
      case 2:
        return `${this.bottles} ${Verse.SONG_LYRICS[0]}, ${this.bottles} ${Verse.SONG_LYRICS[1]}` +
        `${Verse.SONG_LYRICS[2]} ${this.bottles - 1} ${Verse.SONG_LYRICS[5]}.\n`;
        break;
      default:
        return `${this.bottles} ${Verse.SONG_LYRICS[0]}, ${this.bottles} ${Verse.SONG_LYRICS[1]}` +
        `${Verse.SONG_LYRICS[2]} ${this.bottles - 1} ${Verse.SONG_LYRICS[0]}.\n`;
    }
  }
}

class BeerSong {

  static verse(number) {
    return new Verse(number).singleVerse();
  }

  static verses(start, end) {
    let lyrics = [];
    for(let verse = start; verse >= end; verse--) {
      lyrics.push(this.verse(verse));
    }

    return lyrics.join("\n");
  }

  static lyrics() {
    return this.verses(99,0);
  }

}
module.exports = BeerSong;
