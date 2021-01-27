// PEDAC
// Understand the problem
// What is linked list?
// -> It is a fundamental data structure in computer science
// -> It often used in the implementation of other data structure.
// What is the simple linked list?
// -> It is a single linked list
//   -> where each element comtains data and "next" field
//   -> "next" field : points to the next element in the list of elements
// What is this form of linked list(single) used for?
// -> It is used to represent a sequences or push-down stacks
// -> push-down stack : is LIFO stack (Last In, First Out)
// We need to create a single linked list
// -> each element may contain a range of data such as the numbers
//     1 - 10
// We need to implement a function to reverse the linked list
// We need to implement a function to convert the linked list to an array


// Examples / test cases
// Each element contains data and next: point to null by default
// element : {data : 1, next : null}

// Data structre
// object to represent each element
//  -> data property is numbers between 1- 10
//  -> next property is a reference to another element object
// object to represent the simpleLinkedList
//  -> elements : array


// Alogrithm
// class Element :
// -> constructor:
//  -> it accepts data and element object as arguments
//  -> data : input data
//  -> next : reference to input element object || null
// -> datum() instance method, takes no arguments
//  -> return the calling object data
// -> isTail() instance method, takes no arguments
//  -> return a boolean value that represents if the
//     calling object is the last element
// -> next() instance method
//  -> return the reference of the next element stored in next property

// class SimlpleLinkedList:
// -> constructor: 
//  -> it accepts no arguments
//  -> linkedList : an empty array
// -> size() instance method, takes no arguments
//  -> return the length of the linkedList
// -> isEmpty() instance method, takes no arguments
//  -> return a boolean value that represents if the linkedList is empty or not
// -> push() instance method, takes one argment(data)
//   -> it creates an element for that data
//   -> add the element to the linkedlist
// -> peek() instance method, takes no arguments
//   -> return the data of the top element in the linkedlist
// -> head() instance method, takes no arguments
//   -> it returns the top elements in the linkedlist(last element added)
// -> pop() instance method, takes no arguments
//  -> it removes the top elements of the linkedlist
//  -> it returns its data
// -> fromArray() statice method, takes array as an argument
//  -> if the array is empty or null=> 
//      -> it creates an empty linkedList 
//      -> it returns the linkedlist object
//  -> if the array is not empty
//     -> it creates a linkedlist
//     ->create a new element for each item in the array
//     -> add thoses elements to the linkedlist
//     -> return the linkedlist
// toArray() instance method, takes no arguments
//  -> it converts the callingLinked list to an array
//   -> if the linkedList is empty => return empty array
//   -> if not => return an array that has the elements data as items
//      -> loop over the linkedlist starting from last items
//         -> push the each element data to a new array
//         -> return the new array



class Element {
  constructor(data, nextElement) {
    this.data = data;
    this.nextElement = nextElement || null;
  }

  datum() {
    return this.data;
  }

  isTail() {
    return this.nextElement === null;
  }

  next() {
   return this.nextElement;
  }
}

class SimpleLinkedList {
  constructor() {
    this.linkedList  = [];
  }

  static fromArray(array) {
    let linkedList = new SimpleLinkedList();
    if(array === null) {
      return linkedList;
    }else if(array.length === 0) {
      return linkedList;
    } else{
      for(let index = array.length -1; index >= 0; index--) {
        linkedList.push(array[index]);
      }
      return linkedList;
    }
  }

  size() {
    return this.linkedList.length;
  }

  isEmpty() {
    return this.linkedList.length === 0 ;
  }

  push(data) {
    let nextElement = this.head();
    let element = new Element(data, nextElement);
    this.linkedList.unshift(element);
  }
  peek() {
    if(this.linkedList[0]) {
      return this.linkedList[0].datum();
    } else {
    return null;
    }
  }

  head() {
    return this.linkedList[0];
  }

  pop() {
    return this.linkedList.shift().datum();
  }

  toArray() {
    let linkedListArray = [];
    if(this.size() !== 0) {
     this.linkedList.forEach(element => {
      linkedListArray.push(element.datum());
     });
    }
    return linkedListArray;
  }

  reverse() {
    let reversedArray = this.toArray().reverse();
    return SimpleLinkedList.fromArray(reversedArray);
  }
}

module.exports = {Element, SimpleLinkedList}
