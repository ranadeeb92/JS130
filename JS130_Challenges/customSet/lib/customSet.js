// PEDAC
// understand the problem
// We need to create a custom set type.
// What is custom set type?
// -> It is a data structure of some type.
// -> It is a set of unique elements that can be handled
//    in several well defined ways.
// fo simplicity, we assume that all elements of a set must be numbers

const { objectExpression, createUnionTypeAnnotation } = require("@babel/types");

// Examples/ test cases
// 1- sets with no elements are empty:
  // new CustomSet().isEmpty()  => true
// 2- sets with elements are not empty:
  // new CustomSet([1]).isEmpty() => false
// 3- sets can report if they contain an element
  //  nothing is contained in an empty set
  //  new CustomSet().contains(1)  => false
  //  new CustomSet([1, 2]).contains(1)  => true
  //  new CustomSet([1, 2]).contains(3)  => false
// 4- a set is a subset if all of its elements are contained in 
//    the other set
  // a. empty set is a subset of another empty set
  //   new CustomSet().isSubset(new CustomSet()) => true
  // b. empty set is a sbset of a non-empty set
  //   new CustomSet().isSubset(new CustomSet([1, 2])) => true
  // c. non-empty set is not a sbset of an empty set
  //   new CustomSet([1, 2]).isSubset(new CustomSet()) => false
  // d. a non-empty set is a sbset of set with same elements
  //   new CustomSet([1, 2]).isSubset(new CustomSet([1, 2])) => true
  // e. a set is a subset of larger set with same elements
  //   new CustomSet([1, 2]).isSubset(new CustomSet([1, 2, 3])) => true
// 5- disjoint: sets are disjoint if they share no elements
  // a. the empty set is disjoint with itself and with non-empty set
  // b. sets are not disjoint if they share an element
// 6- isSame: sets with the same elements are equal
  // a. empty sets are equal
  // b. empty set is not equal with non-empty set
  // c. non-empty set is equal with non-empty set if they have the same elements
// 7- adding an existing element does not change the set
// 8- intersection : returns a set of all shared elements
  // a.intersection of two empty sets is an empty set
  // b.intersection of an empty set and non-empty set is an empty set
  // c.intersection of two sets with no shared elements is an empty set
// 9- difference of a set is a set of all elements that are only in the first set
  // a. difference of two empty sets is an empty set
  // b. difference of empty set and non-empty set is an empty set
  // c. difference of a non-empty set and an empty set is the non-empty set
  // d. difference of two non-empty sets is a set of elements that are only in the first set
// 10- union: returns a set of all elements in either set


// Data structure
// array to represent a set of uniques elements

// Algorithm
// class CustomSet
//-> constructor, takes no arguments or array of elements
//  -> return a custom set object
//-> isEmpty(), takes no arguments
//  -> checks if the calling set is empty
//  -> returns boolean value(true or false)
//-> contains(), takes one argument
//  -> checks if the calling set includes this argument
//  -> returns a boolean value(true/false) 
//-> isSubset(), takes another customSet object as an argument
//  -> check if the calling set is a subset of the argument
//  -> returns boolean value(true/false)
//-> isDisjoint(), takes another customSet as an argument
//  -> check if the calling set sharing any elements with the argument
//  -> returns boolean value(true/false)
//-> isSame(), takes another customSet as an argument
//  -> check if thee two sets have exactly the same elements 
//  -> returns boolean value(true/false)
//-> add(), takes one arguments
//  -> add the argument to the set
//  -> returns the calling set
//-> intersection(), takes another customSet as an argument
//  -> create a new customSet and add all shared elements
//  -> return the new customSet


class CustomSet{
  constructor(array) {
    if(array) {
      this.set = array;
    } else {
      this.set = [];
    }
  }

  isEmpty() {
    return this.set.length === 0;
  }

  contains(element) {
    return this.set.includes(element);
  }

  isSubset(customSetObject) {
    // if(this.isEmpty()) return true;
    // else if(customSetObject.isEmpty()){
    //   return false;
    // }else {
      return this.set.every(element => customSetObject.contains(element));
   // }
  }

  isDisjoint(customSetObject) {
    // if(this.isEmpty()) return true;
    // else if(customSetObject.isEmpty()){
    //   return true;
    // }else {
      return !(this.set.some(element => customSetObject.contains(element)));
  //   }
   }

   isSame(customSetObject) {
    if(this.set.length === customSetObject.set.length) {
      return this.set.every(element => customSetObject.contains(element)) && 
      customSetObject.set.every(element => this.contains(element))
    } else {
      return false;
    }
   }

   add(element) {
    if(!(this.contains(element))) {
      this.set.push(element);
    }
    return this;
   }

   intersection(customSetObject) {
     let sharedSet = new CustomSet();
     if(!this.isDisjoint(customSetObject)) {
      let longestSet = customSetObject.set.length > this.set.length ? customSetObject : this;
      let shortestSet = longestSet.isSame(customSetObject) ? this : customSetObject;

      for(let index = 0; index < shortestSet.set.length; index++) {
        if(longestSet.contains(shortestSet.set[index])) {
          sharedSet.add(shortestSet.set[index]);
        }
      }
     }
     return sharedSet;
   }

   difference(customSetObject) {
    let differenceSet = new CustomSet();
    if(this.isSame(customSetObject) || this.isEmpty()) {
      return differenceSet;
    } else if(!(this.isEmpty()) && customSetObject.isEmpty()){
      this.set.forEach(ele => differenceSet.add(ele));
      return differenceSet
    } else {
      this.set.forEach(ele => {
        if(!customSetObject.contains(ele)){
          differenceSet.add(ele);
        }
      });
      return differenceSet;
    }
   }

   union(customSetObject) {
     let elements = [...customSetObject.set, ...this.set];
     elements = elements.filter((ele, index) => elements.indexOf(ele)=== index)
     return new CustomSet(elements);

   }

}

const actual = new CustomSet([1, 2, 3, 4]).intersection(
  new CustomSet([3, 2, 5])
);
const expected = new CustomSet([2, 3]);

console.log(actual);
console.log(expected);
module.exports = CustomSet;

