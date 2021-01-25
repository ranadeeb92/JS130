// PEDAC
// understand the problem
// write a program that takes as input a letter
//  -> and outputs the letter in a diamond shape.
//  -> it prints a diamond starting with letter 'A' with the supplied letter
//     at the widest point

const { nodeInternals } = require("stack-utils");

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
//    -> numberOfRows = numberOfLettersFrom'A' + (numberOfLettersFrom'A' - 1)
//    -> each row length is equal to numberOfRows
//    -> if(numberOfRows > 1)
//        -> print first half 
//           -> loop over the letters to print each row
//              -> create a row with a length equal to numberOfRows
//                 and start and end with the current letter unless it is 'A'
//       -> print second half 
//           -> loop over the letters ecept the input letter to print each row
//              -> create a row with a length equal to numberOfRows
//                 and start and end with the current letter unless it is 'A'
//    -> else print a row that has 'A' letter

// Code

class Diamond {
  static ALPHABIT = ["A", "B", "C", "D", "E", "F", "G", "H", "I",
                    "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
                      "T", "U", "V", "W", "X", "Y", "Z"];

  static getDiamondLetters(letter) {
    return this.ALPHABIT.slice(0, this.ALPHABIT.indexOf(letter) + 1);
  }


  static makeDiamond(letter) {
    let diamondLetters = this.getDiamondLetters(letter);
    let numberOfRows = diamondLetters.length + (diamondLetters.length - 1);
    // create nxn matrix
    let matrix = new Matrix(numberOfRows);
    matrix.fill(diamondLetters);
    matrix.print();
  }
}

class Matrix {
  constructor(n) {
    this.numberOfRows = n;
    this.numberOfCols = n;
    this.matrix = Array(this.numberOfRows).fill()
    .map(_ => Array(this.numberOfCols).fill(' '));
  }

  fill(letters) {
    let fillTop = this.createTopHalfFiller();
    let fillBottom = this.createBottomHalfFiller();

    for(let index = 0; index < letters.length; index++) {
      fillTop.call(this, letters[index]);
    }
    for(let index = letters.length - 2; index >= 0; index--) {
      fillBottom.call(this, letters[index]);
    }

  }

  createTopHalfFiller() {
    let middle = Math.floor(this.numberOfRows/2);
    let row = 0;
    return function(letter) {
      for (let col = middle - row; col <= middle + row; col++) {
        if(row + col === middle || col - row === middle) {
          this.matrix[row][col] = letter;
        }
     }
     row++;
    }
  }

  createBottomHalfFiller() {
    let middle = Math.floor(this.numberOfRows/2);
    let row = middle + 1;
    return function(letter) {
      let temp = row - middle;
      for (let col = temp; col < this.numberOfRows - temp; col++) {
        //if(row - (row - middle) === middle ){
          this.matrix[row][col] = letter;
        //}
        
     }
     row++;
    }
  }

  print() {
    this.matrix.forEach(row => console.log(row.join('')));
  }
    

}
console.log(Diamond.makeDiamond('F'))