// PEDAC
// undestand the problem
// -> a program that given a natural number and a set of one or more numbers
// -> the default set is(3, 5)
// -> find sum of all the multiples of the set's numbers up to the natural number
// -> a number is multiply of another number if:
//    -> number % anotherNumber === 0


// Examples/ test cases
// sumOfmultiples to 1 and the set[3, 5] is 0 
// sumOfmultiples to 4 and the set[3, 5] is 3
// sumOfmultiples to 10 and the set[3, 5] is 3, 5, 6, 9 = 23
// sumOfmultiples to 20 and the set[7, 13, 17] is 7 + 14 + 13 +17 = 51


// Data structure
// array to represent the set of numbers
// number to represent the sum of multiples

// Algorithm
// constructor sumOfMultiples
//  -> set = [input numbers]

// to() instance method
// -> call to() static method 

// to() static method
// => takes the input number
// => create multiples and assign to it an empty array
// => loop over the number starting from the first number of the set 
//    until the input number
//   -> for each number :
//      -> check if it is in multiples array 
//      -> check if it is a multiply for any of the set numbers
//        -> add to multiples array
// => loop over mutliples array and compute the sum 
// => return the sum

// Code

class SumOfMultiples{
  constructor(...set) {
    if(set.length === 0) {
      this.setOfNumbers = [3, 5];
    } else {
      this.setOfNumbers = set;
    }
  }
  static to(number) {
    return new SumOfMultiples().to(number);
  }

  to(number) {
    let sum = 0;
    for (let num = 1; num < number; num++) {
      if(this.setOfNumbers.some(element => num % element === 0)) {
        sum += num;
      }
    }
    return sum;
  }
}


module.exports = SumOfMultiples;