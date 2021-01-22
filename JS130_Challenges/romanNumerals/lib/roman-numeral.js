// PEDAC
// understand the problem
// we need a program that compute the roman number of a decimal number
// what are roman numbers?
// -> roman numbers represented by letters:
//    -> I -> 1
//    -> V -> 5
//    -> X -> 10
//    -> L -> 50
//    -> C -> 100
//    -> D -> 500
//    -> M -> 1000
// -> to represent a decimal number as roman number:
//    -> express each digit seperately, 
//       start with the left most digit, 
//       skip any digit with a value of zero

// examples/ test cases
// 1990 => 1000 + 900 + 90 => M + CM + XC => MCMXC
// 2008 => 2000 + 8 => MM + VIII => MMVII

// data structure
// object to represent the roman number

// algorithm
// static data that represent romanNumber with its decimal equivalent 
// 1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 
// 50: 'L', 90: 'XC', 100 : 'C', 400 : 'CD', 500 : 'D', 900 : 'CM', 1000 : 'M', 
// constructor
// -> number
// toRoman method
//  -> declare a variable that hold the romanNumber
//  -> declare a variable that hold the currentNumber (the number value)
//  -> create an array of all the numbers from the static data
//  -> sort the numbers array
//  -> loop over the array
//    -> each iteration check if the cureent number >= number
//       -> append the value of number(letter) to romanNumber
//       -> subtract the number from the currentNumber
//  -> return romanNumber



// code

class RomanNumeral{
  constructor(number) {
    this.number = number;
  }
  static ROMAN_LETTERS = {
    1: 'I',
    4: 'IV', 
    5: 'V', 
    9: 'IX', 
    10: 'X', 
    40: 'XL', 
    50: 'L', 
    90: 'XC', 
    100 : 'C', 
    400 : 'CD',
    500 : 'D', 
    900 : 'CM', 
    1000 : 'M',
  }
   
  toRoman() {
    let romanNum = "";
    let currentNum = this.number;
    Object.keys(RomanNumeral.ROMAN_LETTERS)
          .map(key => Number(key))
          .sort((a, b) => b - a)
          .forEach(number => {
            while (currentNum >= number){
              romanNum += RomanNumeral.ROMAN_LETTERS[number];
              currentNum -= number;
            }
          });
    return romanNum;
  }
}

module.exports = RomanNumeral;