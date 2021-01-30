// What is a stack?
  // It is a compound data type like an array.

// What is the difference between a slack and an array?
  // In an array we can insert and remove elements in any order we want.
  // In stack we can add new element at the end of a stack and remove the last inserted element.
  // LIFO rule (Last In First Out)

// Create a function "newStack", that when called returns a stack object with three methods: 
  // "push" -> takes a value and inserts it at the end of the stack
  // "pop" -> removes the last element from the stack and returns it
  // "printStack" -> logs each element of the stack on its own line.
// Use an array to implement the stack, the array should be not accessible from outside the methods.

function newStack() {
  let stack = [];
  return {
    push(newElement) {
      stack.push(newElement);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(ele => console.log(ele));
    }
  }
}
