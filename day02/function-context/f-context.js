//  ============ Function Context ============== //
// Functions in JavaScript run in a specific context, and using the this variable we have access to it.

// All standard functions in the browser run under the Window context.
// Functions defined under an object or a class (another function) will use the context of the object it was created in. However,
// we can also change the context of a function at runtime, either before or while executing the function.

// Example 1
// To bind a function to an object and make it an object method, we can use the bind function. Here is a simple example:

let person = {
  name: "John",
};

function printName() {
  console.log(this.name);
}
//  Obviously, we are not able to call printName() without associating the function with the object person.
// To do this we must create a bound method of the function printName to person, using the following code:
var boundPrintName = printName.bind(person);
boundPrintName();

// For example, let's call printName with person as the context using the call method:
printName.call(person);

//The difference between call/apply and bind is that bind returns a new function identical to the old function,
// except that the value of this in the new function is now the object it was bound to.
// call/apply calls the function with this being the bound object, but it does not return a new function or change the original,
// it calls it with a different value for this.

// Think of call as executing the return value of bind.

printName.call(person); //is the same as
printName.bind(person)(); //executes the function returned by bind

// Example 2

let drink = "wine";

let foo = {
  drink: "beer",
  getDrink: function () {
    return drink;
  },
};

let drink = "wine"; //  we first create a global variable named “drink”, and set it equal to “wine”
var foo = {
  drink: "beer",
  getDrink: function () {
    return drink;
  },
};

// Next, we create an Object Literal named “foo”, with a property “drink” that is equal to “beer”.
// There is also a method that simply returns “drink”. But why does it return “wine”, and not “beer”?
// This is because in the object “foo”, “drink” is a property of foo, not a variable.
// Inside of functions, when reference is made to a variable, the JavaScript engine searches the scope chain and
// returns the first match it finds.

// Although this function executes in the context of “foo”, “foo” does not have a variable named “drink”.
// It has a property named “drink”, but not a variable.
// So the JavaScript engine searches the next level of the scope chain.
// The next level of the scope chain is the global object, which contains a variable named “drink”,
// so the value of that variable (“wine”), is returned.

console.log(foo.getDrink()); // wine

// Example 3
var drink = "wine";

var foo = {
  drink: "beer",
  getDrink: function () {
    return this.drink; // 'this' refers to the object "foo"
  },
};
// In Example # 2, the only change we have made is that in the anonymous function that is assigned to “getDrink”,
// we return “this.drink” instead of “drink”
console.log(foo.getDrink()); // beer

// This is an important detail. When a function executes in the context of an object , the keyword “this” refers to that object.
// You can access any of the properties of the object by using the “this” keyword,

// Example 4
//  Dot Notation
var drink = "wine";

var foo = {};

foo.drink = "beer";

foo.getDrink = function () {
  return this.drink; // 'this' refers to the object "foo"
};

console.log(foo.getDrink());

// Example 5

var drink = "wine";

var foo = {};

foo.drink = "beer";

foo.getDrink = function () {
  return this.drink; // 'this' refers to the object "foo"
};

foo.under21 = {};

foo.under21.drink = "soda";

foo.under21.getDrink = function () {
  return this.drink; // 'this' refers to the object "foo.under21"
};

console.log(foo.getDrink()); // beer

console.log(foo.under21.getDrink()); // soda
