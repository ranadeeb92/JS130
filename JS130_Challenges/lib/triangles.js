// PEDAC
// understand the problem:
// A program to determine whether a triangle is 
//  -> equilateral : has all three sides the same length
//  -> isosceles : has two sides the same length
//  -> scalene : has all three sides of different length
// And the triangle is a shape that has three sides and all sides's length are > 0
// and the sum of length of any two sides >= the third side's length

// Example/ test cases:
// throw an eception if any of the triangle sides have length equal to 0 ot less
// throw an exception if the triangle sides have length > 0 but they don't not satisfy 
// that sum(two sides length) >= the third side's length

// Data structure
// create an object that represent the triangle
//  this object has
//  - three sides
//   - each side has a length
//  -getsideslength
//  -kind method to determin a triangle kind

// Algorithm
// triagnle constructor
  // set the length for each side
  // check if any side's length <= 0 -> throw an exception
  // check if sum two side length >= third side's length
// kind method
  // get the length for each side
  // compare the lengths
     // if they are equal -> return a string "equilateral"
     // if two of them equal -> return a string "isosceles"
     // if they are different -> return a string "scalene"

// code

class Triangle {
  constructor(...sides) {
    if(sides.some(side => side <= 0)) {
      throw new Error("All sides's length should be graeter than 0");
    }else if(!(this.isValid(sides))) {
      throw new Error("It is not a triangle");
    }else {
      this.side1 = sides[0];
      this.side2 = sides[1];
      this.side3 = sides[2];
    }
  }
  // use this method to get triangle sides 
  getSidesLength() {
    return [this.side1, this.side2, this.side3];
  }

  isValid(sides) {
    let [a, b, c] = sides;
    return ((a + b >= c) && (a + c >= b) && (b + c >= a));
  }

  kind() {
    let sidesLength = this.getSidesLength();
    if(sidesLength.every(side => side === sidesLength[0])) {
      return "equilateral";
    } else if(sidesLength[0] !== sidesLength[1] &&  sidesLength[1] !== sidesLength[2] && sidesLength[0] !== sidesLength[2]) {
      return "scalene";
    } else{
      return "isosceles";
    }
  }
}

module.exports = Triangle;
