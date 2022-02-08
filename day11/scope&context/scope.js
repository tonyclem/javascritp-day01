// Outside code cannot reach inside for variable
let myName = "Clement";

function amazingFunction() {
  // inside code can reach outwards for variables but
  // let myName = "clement Anothony Senior";
  //console.log("inside function:", myName);
  if (2 + 2 === 4) {
    myName = "clement Anthony";
    // console.log(myName);
  }
}

amazingFunction();
console.log("in the global scope:", myName);

// Scope is about variable

function foo() {
  if (true) {
    var fruit1 = "apple"; //exist in function scope
    const fruit2 = "banana"; //exist in block scope
    let fruit3 = "strawberry"; //exist in block scope
  }
  console.log(fruit1);
  // console.log(fruit2); //error: fruit2 is not defined
  // console.log(fruit3); //error: fruit3 is not defined
}

foo();
//result:
//apple

// A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.

// here is the link to the source example: https://ultimatecourses.com/blog/everything-you-wanted-to-know-about-javascript-scope
//  ==================     Lexical Scope ======================== //

//Whenever you see a function within another function, the inner function has access to the scope in the outer function, this is called Lexical Scope or Closure - also referred to as Static Scope. The easiest way to demonstrate that again:

// Scope A
let myFunction = function () {
  // Scope B
  let name = "Todd"; // defined in Scope B
  let myOtherFunction = function () {
    // Scope C: `name` is accessible here!
  };
};

let myFunction = function () {
  let name = "Todd";
  let myOtherFunction = function () {
    console.log("My name is " + name);
  };
  console.log(name);
  myOtherFunction(); // call function
};
myFunction();

//Lexical scope is easy to work with, any variables/objects/functions defined in its parent scope, are available in the scope chain. For example:

let name = "Todd";
let scope1 = function () {
  // name is available here
  let scope2 = function () {
    // name is available here too
    let scope3 = function () {
      // name is also available here!
    };
  };
};

//The only important thing to remember is that Lexical scope does not work backwards. Here we can see how Lexical scope doesn’t work:
// name = undefined
var scope1 = function () {
  // name = undefined
  var scope2 = function () {
    // name = undefined
    var scope3 = function () {
      var name = "Todd"; // locally scoped
    };
  };
};

//=================           Function scope ========================== //
//All scopes in JavaScript are created with Function Scope
// Scope A
let myFunction = function () {
  // Scope B
  let myOtherFunction = function () {
    // Scope C
  };
};
