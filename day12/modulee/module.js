// By using JavaScript design patterns, such as the Module pattern for example, we can create public and private scope. A simple way to create private scope, is by wrapping our functions inside a function. As we’ve learned, functions create scope, which keeps things out of the global scope:

(function () {
  // private scope inside here
})();

//   We might then add a few functions for use in our app:
(function () {
  var myFunction = function () {
    // do some stuff here
  };
})();
// myFunction();
// But when we come to calling our function, it would be out of scope:
// Uncaught ReferenceError: myFunction is not defined
//Success! We’ve created private scope

// define module
var Module = (function () {
  return {
    myMethod: function () {
      console.log("myMethod has been called.");
    },
  };
})();

// call module + methods
Module.myMethod();
//link for more info: https://ultimatecourses.com/blog/everything-you-wanted-to-know-about-javascript-scope

// link for more lesson: https://ultimatecourses.com/blog/checking-if-javascript-object-has-keys
