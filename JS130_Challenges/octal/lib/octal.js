// PEDAC
// understand the problem
// octal to decimal conversion
// -> What is decimal?
  // It is a base-10 system.
  // number of n digits = digit(leftmost) * 10^n-1 +...+ digit * 10^1 + digit(rightmost) * 10^0
// -> What is Octal?
  // It is similer to decimal but it is base-8 syatem
  // uses the digits from 0 to 7 

// Examples / test cases
// example of decimal number:
//  234 as decimal -> n = 3
  // 234 = 2*10^n-1 + 3*10^n-2 + 4*10^n-3
  // 234 = 2*10^2 + 3*10^1 + 4*10^0
  // 234 = 2*100 + 3*10 + 4*1 
// example of octal:
  // 234 as octal  = 2*8^2 + 3*8^1 + 4*8^0
  // 234 = 2*64 + 3*8 + 4*1 = 128 + 24 + 4 = 156 as decimal

// input number is a string represent octal number
// invalid input like a string of letters => return 0
// 8, 9 is an invalid input => return 0
// invalid input like a string of letters and digits => return 0

// Data structure
// number to represent the decimal numner
// string to represent the octal number

// Algorithm
// constructor Octal
//  -> octalNumber = input
// toDecimal instance method
//  -> if the number is invalid octal input => return 0
//  -> compute the number of digits for the input number
//  -> multiply each digit with the 8^n-1 starting from the leftmost digit
//     until you reach the rightmost digit(when the digit is in the nth position)
//  -> add all digits after multiplication
//  -> return the final number

// code

class Octal {
  constructor(str) {
    if(this.isInValidInput(str)) {
      this.number = 0;
    } else{
      this.number = str;
    }
  }

  isInValidInput(inputNumber) {
    let regex = /[a-z89]/i;
    return regex.test(inputNumber);
  }

  toDecimal() {
    let decimalNum = 0;
    if(this.number) {
      let n = this.number.length - 1;
      for (let index = 0; index <= n; index++) {
        decimalNum += Number(this.number[index] * Math.pow(8, n - index));
      }
    } 
    return decimalNum;
  }
}

module.exports = Octal;