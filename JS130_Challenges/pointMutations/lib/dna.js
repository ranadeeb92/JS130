// PEDAC
// understand the problem
// a program that can calculate the Hamming distance between two DNA strands
// What is mutation?
//  -> is a mistake taht occurs during the creation of DNA
// what is Hamming distance?
//  -> is the number of differnces between two DNA strands
//  -> It is only for sequance of equal length
//  -> if we have two DNA strands with different length => We compute the Hamming distance
//       over the shorter strand 

const { start } = require("repl");

// Example/ test cases
// there is no difference between two empty strands
// if strands have different length-> ignore extra for the longer strand

// Data structure
// object to represent DNA
// string to represent a strand
// number to represent the hamming distance


// Algorithm
// constructor 
//  strand 
// hammingDistance method
//  takes distance as an argument
//   -> if two strands have the same length 
//        -> compute the number of difference between two strands
//   -> else 
//        -> compute the number of differences over the shorten strand
//  return the reuslt as number


class DNA {
  constructor(strand) {
    this.strand = strand;
  }
  getStrand() {
    return this.strand;
  }

  getLength() {
    return this.strand.length;
  }

  computedistance(strand1, strand2) {
    let distance = 0;
    for(let index = 0; index < strand1.length; index++) {
      if(strand1[index] !== strand2[index]) {
        distance++;
      }
    }
    return distance;
  }

  hammingDistance(distance) {
    let dnaStrand = this.getStrand();
    let dnaStrandLength = this.getLength();
    let distanceLength = distance.length;

    if(dnaStrandLength === distanceLength) {
      return this.computedistance(dnaStrand, distance);
    } else if(dnaStrandLength > distanceLength){
      return this.computedistance(dnaStrand.slice(0, distanceLength), distance)
    } else{
     return this.computedistance(dnaStrand, distance.slice(0, dnaStrandLength))
    }
  }

}
module.exports = DNA;