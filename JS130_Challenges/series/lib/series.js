// PEDAC

// understand the problem
// a program takes a string of digits 
// -> return all the possible consecutive number series
// -> of a specified length in that string

// Example / test cases
// input : "01234"
// -> digits series length : 3
// output : 012, 123, 234
// -> digits series length : 4
// output :0123, 1234

// if the digits series length greater than the length of the input string
//  -> throw an error
//  -> for example: input :"0123" and asked for 5-digit series => Error

// the output is an array of the series
//  -> each series is an array of numbers

// Data structure
// string to represent the input series
// array to store all possible consecutive number series
// array of numbers that represents series of consecutive numbers

// Algorithm
// Series constructor
// -> series = input string of numbers
// slices instance method
//  -> takes one argument (length of sub_series) > 0
//  -> check the length of the series if >= input number
//     -> convvert the input string to an array of digits
//     -> compute max = digits array length - (input number - 1)
//     -> create an empty array called result
//     -> loop over the array of digits starting from 0 until array length - n
//        -> create an empty array(series)and add to it the sliced element form 
//           current index until (index + input number) 
//        -> add the series array to the result array
//     -> return the array result
//  -> else throw an error


// Code
class Series {
  constructor(str) {
    this.series = str;
  }

  slices(inputLength) {
    if(this.series.length >= inputLength && inputLength > 0) {
      let digits = this.series.split('').map(ele => Number(ele));
      let max = digits.length - (inputLength - 1);
      let result = [];
      for(let index = 0; index < max; index++) {
        let possibleSeries = digits.slice(index, index + inputLength);
        result.push(possibleSeries);
      }
      return result;
    }else {
      throw new Error('The input series length should be' + 
      'greater than 0 but not greater than string length');
    }
  }
}

module.exports = Series;