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

let drink1 = "wine";

let foo1 = {
  drink1: "beer",
  getDrink: function () {
    return drink1;
  },
};
console.log(foo1.getDrink()); // wine

let drink2 = "wine"; //  we first create a global variable named “drink”, and set it equal to “wine”
var foo2 = {
  drink2: "beer",
  getDrink: function () {
    return drink2;
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

console.log(foo2.getDrink()); // wine

// Example 3
var drink3 = "wine";

var foo3 = {
  drink3: "beer",
  getDrink: function () {
    return this.drink3; // 'this' refers to the object "foo"
  },
};
// In Example # 2, the only change we have made is that in the anonymous function that is assigned to “getDrink”,
// we return “this.drink” instead of “drink”
console.log(foo3.getDrink()); // beer

// This is an important detail. When a function executes in the context of an object , the keyword “this” refers to that object.
// You can access any of the properties of the object by using the “this” keyword,

// Example 4
//  Dot Notation
var drink4 = "wine";

var foo4 = {};

foo4.drink4 = "beer";

foo4.getDrink = function () {
  return this.drink4; // 'this' refers to the object "foo"
};

console.log(foo4.getDrink());

// Example 5

var drink5 = "wine";

var foo5 = {};

foo5.drink5 = "beer";

foo5.getDrink = function () {
  return this.drink5; // 'this' refers to the object "foo"
};

foo5.under21 = {};

foo5.under21.drink5 = "soda";

foo5.under21.getDrink = function () {
  return this.drink5; // 'this' refers to the object "foo5.under21"
};

console.log(foo5.getDrink()); // beer

console.log(foo5.under21.getDrink()); // soda

// Example 6

drink6 = "wine";

let foo6 = {};

foo6.drink6 = "beer";

foo6.getDrink = function () {
  return this.drink6; // 'this' refers to the object "foo6"
};

foo6.under21 = {};

foo6.under21.drink6 = "soda";

foo6.under21.getDrink = function () {
  return foo6.getDrink.call(); // execute foo6.getDrink6()
};

console.log(foo6.getDrink()); // beer

console.log(foo6.under21.getDrink()); // wine

// This is because we changed the inner-workings of that function.
// Instead of simply returning “this.drink”, we use the JavaScript “.call()” method,
// which allows you to execute any function in the context of another object.
// When you do not specify the context in which that function is to be “called”,
// it executes in the context of the global object. In the global context,
// there is a variable named “drink” and it is equal to “wine”, so “wine” is returned.

// Example 7

drink7 = "wine";

var foo7 = {};

foo7.drink7 = "beer";

foo7.getDrink = function () {
  return this.drink7; // 'this' refers to the object "foo7"
};

foo7.under21 = {};

foo7.under21.drink7 = "soda";

foo7.under21.getDrink = function () {
  return foo7.getDrink.call(this); // execute foo7.getDrink()
};

console.log(foo7.getDrink()); // beer

console.log(foo7.under21.getDrink()); // soda

// is returned because when we used the JavaScript “.call()” method, we specified the context in which
// the function is to execute. In this case, the context we specify is “this”.
// “this” refers to the context of “foo.under21”, and “foo.under21” has a property named “drink”, so the value “soda” is returned.

// From this link: https://javascript.info/
// See more here: https://www.learn-js.org/
