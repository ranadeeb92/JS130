
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

    genertaeRandomNumber(max) {
        // let indices = [];
        // let i = 1;
        // while(i <= num) {
        //   indices.push(Math.floor(Math.random() * max));
        //   i++;
        // }
        // return indices;
        return Math.floor(Math.random() * max);
    }
  
    generateRandomName(){
      let name = '';
      let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      let alphabit = Array(26).fill().map((_, i) => String.fromCharCode(65 + i));
      
      while(name.length < 2) {
        let randomIndex = this.genertaeRandomNumber(alphabit.length);
        name += alphabit[randomIndex];
      }
      while(name.length < 5) {
        let randomIndex = this.genertaeRandomNumber(digits.length);
        name += digits[randomIndex];
      }

    //  let [letter1Idx, letter2Idx] = this.genertaeRandomNumber(alphabit, 2);
    //  let [digit1Idx, digit2Idx, digit3Idx] = this.genertaeRandomNumber(digits, 3);
     
    //  let name = alphabit[letter1Idx] + alphabit[letter2Idx] + digits[digit1Idx] + digits[digit2Idx] + digits[digit3Idx];
     if(!(Robot.names.includes(name))) {
       Robot.names.push(name);
     } else{
        name = this.generateRandomName();
     }
     return name;
    }
  
    name () {
      if(!(this.robotName)) {
        let randomName = this.generateRandomName();
        this.robotName = randomName;
      }
      return this.robotName;
    }
  
    reset() {
      //Robot.names.splice(Robot.names.indexOf(this.robotName), 1);
      this.robotName = undefined;
    }

    static clearNames() {
      Robot.names.splice(0, this.names.length);
    }
    
  }

  module.exports = Robot;