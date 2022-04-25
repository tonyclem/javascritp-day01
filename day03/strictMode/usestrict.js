// Freecodecamp

// "use strict"; Defines that JavaScript code should be executed in "strict mode".

"use strict";
/* Strict Mode */

function myFunction() {
  "use strict";
  var y = 3.14;
}

// CONVERTING MISTAKES INTO ERRORS

var obj = {};
Object.defineProperty(obj, "x", { value: 0, writable: false });
obj.x = 3.14;

var obj = {
  get x() {
    return 0;
  },
};
obj.x = 3.14;

delete Object.prototype;

function sum(a, a, c) {
  "use strict";
  return a + b + c;
}

// WITH AND EVAL CHANGES

var b = 17;
if (obj) {
  b; // Is this var x or obj.x?
}

eval("var x;");

var c = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(c === 17);
console.assert(evalX === 42);

// SECURING JAVASCRIPT
