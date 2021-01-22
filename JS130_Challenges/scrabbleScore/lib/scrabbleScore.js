// PEDAC
// understand the problem
// a program that given a word and computes its scrabble score
// use this letter values table:
// A, E, I, O, U, L, N, R, S, T -> 1
// D, G ->	2
// B, C, M, P -> 3
// F, H, V, W, Y -> 4
// K ->	5
// J, X ->	8
// Q, Z ->	10

// examples/ test cases
// the word : "CABBAGE" -> scrabble score -> 3 + 1 + 3 + 3 + 1 + 2 + 1 = 14
// if the given word has length === 0 => its scrabble score = 0
// word has whitespace charaters => its scrabble score = 0
// null word => its scrabble score = 0
// one letter word => its scrabble score = the value of the letter
// scrabble score are case-insensitive



// Data structure
// the input is a string
// the score is a number
// an object to represent the letter values


// Algorithm
// constructor Scrabble
//  -> word = given word
// score instance method
//  -> compute the score for the instance's word
//     -> if the word is null, empty or has just whitespace charaters => return 0
//     -> create an accumulator with 0 as an inital value
//     -> loop over the word
//         -> add the value of each character to the accumulator
//     -> return the accumulator
// score static method
//  -> takes string (word)as an argument and computes its score

class Scrabble {
  constructor(word) {
    this.word = word;
  }

  static LETTER_VALUES = {
    "AEIOULNRST" : 1,
    "DG":	2,
    "BCMP": 3,
    "FHVWY" : 4,
    "K":	5,
    "JX":	8,
    "QZ" :	10
  };

  score() {
    return Scrabble.score(this.word);
  }
  
  static score(word){
    if(!(word)|| word.match(/^\s+$/g)) return 0;
    else {
      let letters = Object.keys(Scrabble.LETTER_VALUES);
      return word.toUpperCase().split('').reduce((score, char) => {
        letters.forEach(groupOfLetters => {
          if(groupOfLetters.includes(char)) {
            score += Scrabble.LETTER_VALUES[groupOfLetters];
          }
        });
        return score;
      }, 0);

    }
  }
}

module.exports = Scrabble;