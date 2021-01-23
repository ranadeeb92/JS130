// PEDAC
// undersatnd the problem
// What is a perfect number?
//  We can classify a number as a perfect number if the sum of its positive 
//  divisors (Aliquot sum) is equal to the number itself

// What is an abundant number ?
//  We can classify a number as an abyndant number if the sum of its positive 
//  divisors (Aliquot sum) is greater than the number itself

// What is a deficient number ?
//  We can classify a number as an abyndant number if the sum of its positive 
//  divisors (Aliquot sum) is less than the number itself

// What are number's positive divisors?
// -> they are numbers that can be divided by the target number without remainder
// -> number % targertNumber === 0 (except the target number itself) 

// Examples / test cases
// target number : 6
// its positive divisors : 1, 2, 3
// its Aliquot sum : 1 + 2+ 3 = 6 => so it is a perfect number
// if the input number is negative => raise an error
// if a number has only one divisor which is (1) -> it is an deficient and prime number

// Data structure
// number to represent the input number
// number to represent the sum of the number's positive divisors
// string to represent the classification of a number

// Algorithm
// static method classify
//  -> takes number as an argument
//  -> checks if the input number is negative or not a number 
//     -> throw an exception
//  -> compute the aliquot sum for the input number
//    -> loop over the numbers statring from 1 
//    -> add the positives divisors to sum
//  -> compare the input number with the sum of it's divisors
//     -> if the sum is equal to the input number => return "perfect"
//     -> if the sum is greater than the input number => return "abundant"
//     -> if the sum is less than the input number => return "deficient"

class PerfectNumber {
  constructor () {}

  static getaliquotSum(number) {
    let sum = 0;
    for (let num = 1; num < number; num++) {
      if(number % num === 0) sum += num;
    }
    return sum;
  }

  static classify(number) {
    if(typeof number !== "number" || number <= 0) {
      throw new Error("The input should be a number and greater than 0")
    } 
    let aliquotSum = PerfectNumber.getaliquotSum(number);

    return aliquotSum === number ? "perfect" : 
           aliquotSum > number ? "abundant" : "deficient";
  }
}

module.exports = PerfectNumber;
