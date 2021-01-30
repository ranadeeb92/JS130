// Write a "delegate" function that can be used to delegate the behavior of a function or a method
// to another object's method.

// "delegate"  maintains the reference, doesn't return a new function like "bind" method
// input : takes at minimum two arguments
  // the object
  // the name of the method on the object
  // if there any remaining arguments -> passe them as arguments to the object's method that it delegates to.

let foo = {
  name : 'test',
  bar : function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
}

let baz = {
  qux : delegate(foo, 'bar', 'hello'),
}

baz.qux(); // hello test
foo.bar = function() {
  console.log('changed')
}

baz.qux(); // changed


function delegate(context, methodName, ...args) {
  return function () {
    return context[methodName].call(context,...args);
  }
}