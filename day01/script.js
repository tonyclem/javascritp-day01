// Exercise 1
console.log("Hello world");

// Exercise 2
// variable is a box that contains a piece of information, to be saved for later use. You give it a name that describes what its contents are, and to also refer to it at a later point.
// var
// let
// const

// Exercise 3
var life = 100; // 100 value
life = life - 10;
console.log(life);

// Exercise 4
//  JavaScript  types
let numberTypess = 42; // Number
let stringTypesss = "HackYourFuture"; // String
let booleanTypess = true == false; // Boolean
let arrayTypess = [
  [1, 2, 3],
  ["what", "why", "when", "how"],
  [true, false],
]; // Array
let theSameArray = new Array(1, 2, 3); //
let objectTypess = { name: "clem", age: 100, profession: "Web Developer" }; // Object
let functionTypess = function cle() {
  return true;
}; // Function
let undefinedTypess = undefined; // `undefined
let symbolTypess; // * + > < | &  etc // symbol
let emptyVariable = null; //

// Exercise 5
const name = "clement";
const age3 = 27;

console.log(`Hello World my name is ${name} i'm ${age3} years old`);

console.log(typeof name);

// Exercise 6
const age = 30;
const age2 = 35;
if (age === 30 || age2 === 31) {
  console.log("good you great old enough");
} else {
  console.log("sorry you are to young ");
}

// // Exercise 7
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meet with the Boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appoinment",
    isCompleted: false,
  },
];

for (let i = 0; i < todos.length; i++) {
  console.log(todos[2].text.toUpperCase());
}

// Exercise 7a
const todos2 = [
  {
    id: 4,
    text: "work smart",
    isCompleted: true,
  },
  {
    id: 2,
    text: "live like a Boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Stay honest appoinment",
    isCompleted: false,
  },
];
todos2.push({ id: 5, text: "i can do it", isCompleted: true });
console.log(todos2[2]);

todos2.pop();
console.log(todos2);

// Exercise 7 b
function apples() {
  console.log("apple");
}
// console.dir(document);

const todos3 = ["Maria", "id", "work smart", "isCompleted"];

for (name1 of todos3) {
  console.log(`Hello world ${name1}`);
  if (name1 !== "Maria") {
    console.log("good day ");
    break;
  }
}

// Exercise 8
// const title = document.querySelector(".title");
// const changeColor = document.querySelector(".changeColor");
// const changeRemove = document.querySelector(".changeRemove");

// const bgcolor = (title.style.background = "blue");
// title.style.color = "white";

// function changeTheColor() {
//   title.style.color = "red";
//   title.style.fontSize = "30px";
// }

// changeColor.addEventListener("click", changeTheColor);

// const nameList = document.querySelector(".name-list li");

// for (user of userList) {
//   user.addEventListener("click", function () {
//     this.style.color = "red";
//   });
// }

// Exercise 9
function test() {
  var foo = 33;
  if (foo) {
    let fooe = foo + 55; // not ReferenceError
    console.log(fooe);
  }
  console.log(foo);
}
test();

// Exercise 10  conditions
// if statement
var foo = 1;
var bar = 2;
var moo = 3;

if (foo < bar && moo > bar) {
  console.log("foo is smaller than bar AND moo is larger than bar.");
}

if (foo < bar || moo > bar) {
  console.log("foo is smaller than bar OR moo is larger than bar.");
}

// Equal
console.log("1" == 1); // true
console.log(1 == 1); // expected output: true
console.log("hello" == "hello"); // expected output: true
console.log("1" == 1); // expected output: true
console.log(0 == false); // expected output: true
// Example
var myNumber = 42;
if (myNumber == 42) {
  console.log("The number is correct.");
} // true

console.log("1" === 1); // false

// Strict equality (===)
console.log("hello" === "hello"); // true
console.log("hello" === "hola"); // false
console.log(3 === 3); // true
console.log(3 === 4); // false
console.log(true === true); // true
console.log(true === false); // false
console.log(null === null); // true

// example
let favoriteTree = "birch";
console.log(favoriteTree);

// Example
// let favoriteTree2 = "birch2";
// actual: whatever is stored in favoriteTree2 on this line
// expected: 'birch2'
// const prediction1 = favoriteTree2 === "birch2";
console.log("Hello Assert");
console.assert(2 === 2, "No is False");
