// PEDAC
// understand the problem
// write a program that takes as input a letter
//  -> and outputs the letter in a diamond shape.
//  -> it prints a diamond starting with letter 'A' with the supplied letter
//     at the widest point


// Examples / test cases
// The first row and the last row contains one 'A'
// All the other rows have exactly two identical letters.(except first/last row)
// The diamond is horizontally/vertically symmetric.
// The diamond has a square shape(width equals height)
// The letters formed the diamond
// The top half of the diamond has the letters in ascending order
// The bootom half of the diamond has the letters in descending order
// The four corners containg the spaces are triangle

// 'B'
// => A
//   B B
//    A

// Data structure
// object to reprsent the diamond
// string to represent each row

// Algorithm
// makeDiamond is a static method in Diamond class
// -> determine how many rows we need by:
//    -> compute the number of letters starting from 'A' until the input letter
//    -> numberOfRows = (numberOfLettersFrom'A'*2) - 1
//    -> create a matrix (nxn) where n equals to numberOfRows
//    -> fill the matrix withe the letters
//      -> compute the middle of the matrix
//      -> define row = 0
//      -> loop over the array of letters
//        -> start a loop over the col of the matrix from col = middle - row
//           -> check if row + col === middle || col - row === middle => fill the position for :
//           -> matrix[row][col] and matrix[n-row -1][col]
//        -> row ++
//    -> return a string represents the matrix

// Code

class Diamond {
  static ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I",
                    "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
                      "T", "U", "V", "W", "X", "Y", "Z"];

  static getDiamondLetters(letter) {
    return this.ALPHABET.slice(0, this.ALPHABET.indexOf(letter) + 1);
  }


  static makeDiamond(letter) {
    let diamondLetters = this.getDiamondLetters(letter);
    let numberOfRows = (diamondLetters.length * 2) - 1;
    // create nxn matrix
    let matrix = new Matrix(numberOfRows);
    matrix.fill(diamondLetters);
    return matrix.toString();
  }
}

class Matrix {
  constructor(n) {
    this.numberOfRows = n;
    this.numberOfCols = n;
    this.matrix = Array(this.numberOfRows).fill()
    .map(() => Array(this.numberOfCols).fill(' '));
  }

  fill(letters) {
    let middle = Math.floor(this.numberOfRows/2);
    let row = 0;
  
    for(let index = 0; index < letters.length; index++) {
      for (let col = middle - row; col <= middle + row; col++) {
        if(row + col === middle || col - row === middle) {
          this.matrix[row][col] = letters[index];
          this.matrix[this.numberOfRows-1 -row][col] = letters[index];
        }
     }
     row++;
    }

  }

  toString() {
    return this.matrix.map(row => row.join('')).join('\n') + "\n";
  }
    

}
module.exports = Diamond;
