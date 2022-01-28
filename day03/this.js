// In general, the this references the object of which the function is a property.
// In other words, the this references the object that is currently calling the function.

// From here:  https://www.javascripttutorial.net/javascript-this/

// Suppose you have an object called counter that has a method next(). When you call the next() method, you can access the this object.

let counter = {
  count: 0,
  next: function () {
    return ++this.count;
  },
};

counter.next();

//This behavior is consistent in both strict and non-strict modes. Here’s the output on the web browser:
console.log(this === window); // true

//In the non-strict mode, the this references the global object when the function is called as follows:

function show() {
  console.log(this === window); // true
}

show();

//Note that the strict mode has been available since ECMAScript 5.1. The strict mode applies to both function and nested functions. For example:
function show() {
  "use strict";
  console.log(this === undefined); // true

  function display() {
    console.log(this === undefined); // true
  }
  display();
}

show();

// Example 2 From freeCode Camp
/* THIS */

console.log(this.document === document);

console.log(this === window);

this.a = 37;
console.log(window.a);

function f1() {
  "use strict";
  return this;
}
console.log(f1() === window);

function add(c, d) {
  return this.a + this.b + c + d;
}

var o = { a: 1, b: 3 };
console.log(add.call(o, 5, 7));
console.log(add.apply(o, [10, 20]));

function f() {
  return this.a;
}

var g = f.bind({ a: "unicycle" });
console.log(g());

var h = g.bind({ a: "cereal" }); // won’t work a second time
console.log(h());

var o = { a: 8, f: f, g: g, h: h };
console.log(o.f(), o.g(), o.h());

var o = {
  traditionalFunc: function () {
    console.log("traditionalFunc this === o?", this === o);
  },
  arrowFunc: () => {
    console.log("arrowFunc this === o?", this === o);
    console.log("arrowFunc this === window?", this === window);
  },
};

o.traditionalFunc();

o.arrowFunc();

var o = {
  prop: 37,
  f: function () {
    return this.prop;
  },
};

console.log(o.f()); // logs 37

var o = { prop: 23 };

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f());
