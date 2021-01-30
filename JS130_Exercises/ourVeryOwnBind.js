// Create a function 'myBind' that accepts two arguments
// input :
  // -> the function to bind
  // -> the context object
// output:
  // -> returns a new function that is hard-bound to the passed in context.

// Note: arrow function doesn't have "arguments" array-like object

function myBind(func, context) { 
  return (...args) => { // using rest operator to collect any passing arguments
    return func.call(context, ...args); // using spread operator to spread the passing arguments
  }
}


// another solution with apply instead of call
function myBind(func, context) {
  return (...args) => { // using rest operator
    return func.apply(context, args); // apply method uses an array to pass arguments to the function
  }
}

// third way by using "arguments" array-like object

function myBind(func, context) { 
  return function() { 
    return func.apply(context, arguments); 
  }
}

// update "myBind" to support PFA(partial function application)
function myBind(func, context, ...args) {
  return function(...restArgs) {
    return func.apply(context, [...restArgs, ...restArgs]);
  }
}
