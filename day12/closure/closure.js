// Closures ties in very closely with Lexical Scope. A better example of how the closure side of things works, can be seen when returning a function reference - a more practical usage. Inside our scope, we can return things so that they’re available in the parent scope:

let names = "clement Anthony";
let sayHello = function (name) {
  let text = "Hello, " + name;
  return function () {
    console.log(this.text);
  };
};

sayHello(names); // Hello, clement Anthony

// Example

let show = function () {
  console.log("Hello Clement");
};
show();
