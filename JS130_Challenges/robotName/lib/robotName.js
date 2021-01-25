
// PEDAC
// understand the problem
// a program to manage robot factory settings
// When we create a robot object, it has no name
  // => then when we ask 
  // for name, a random name is generated like
  // RX837 
  // name pattern is : start with two letters, then 3 digits
// We can reset a robot to its faactory setting
   //=> erase its name : hasno name
   // when ask for a name again, a new name is generated
// The names must be random; they should not follow a predictable sequence.
 // we should not allow the use of the same name twice when avoidable.

// Examples / test cases
// different robots have different names
// different name when chosen name is taken

// Data structure
// string to represent a robot name
// object to represent a robot


// Algorithm
// private data to store the chosen names
// name method
  // generate random name
  // add robotName propert and assign to it the generated name 
  // return the name
// reset method
  // earse the name of the robot


  class Robot{
    static names = [];
    static DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    static ALPHABET = Array(26).fill().map((_, i) => String.fromCharCode(65 + i));
    

    static clearNames() {
      Robot.names.splice(0, Robot.names.length);
    }

    genertaeRandomNumber(max) {
      return Math.floor(Math.random() * max);
    }
  
    generateRandomName() {
      let name;
      do{
        name = '';
        while(name.length < 2) {
          let randomIndex = this.genertaeRandomNumber(Robot.ALPHABET.length);
          name += Robot.ALPHABET[randomIndex];
        }
        while(name.length < 5) {
          let randomIndex = this.genertaeRandomNumber(Robot.DIGITS.length);
          name += Robot.DIGITS[randomIndex];
        }
      } while(Robot.names.includes(name))
      
      Robot.names.push(name);
      return name;
    }
  
    name () {
      if(!(this.robotName)) {
        this.robotName = this.generateRandomName();
      }
      return this.robotName;
    }
  
    reset() {
      this.robotName = undefined;
    }
    
  }

  module.exports = Robot;