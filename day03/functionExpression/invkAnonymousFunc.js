// By placing functions and variables inside an immediately invoked function expression,
// you can avoid polluting them to the global object:

//  Example 1  form here: https://www.javascripttutorial.net/javascript-immediately-invoked-function-expression-iife/
(function () {
  var counter = 0;

  function add(a, b) {
    return a + b;
  }

  console.log(add(10, 20)); // 30
})();

// Example
// To fix this, you can apply IIFE in the calculator.js as follows:

const calculator = (function () {
  function add(a, b) {
    return a + b;
  }

  function multiply(a, b) {
    return a * b;
  }
  return {
    add: add,
    multiply: multiply,
  };
})();
