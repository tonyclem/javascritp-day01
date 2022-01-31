// Logical Operators
// The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation).
// The && operator gets true only if the two operands are true.
// The || operator gets true either of the operand is true. The ! operator negates true to false and false to true.

// && ampersand operator example

const check1 = 4 > 3 && 10 > 5; // true && true -> true
const check2 = 4 > 3 && 10 < 5; // true && false -> false
const check3 = 4 < 3 && 10 < 5; // false && false -> false

// || pipe or operator, example

const check4 = 4 > 3 || 10 > 5; // true  || true -> true
const check5 = 4 > 3 || 10 < 5; // true  || false -> true
const check6 = 4 < 3 || 10 < 5; // false || false -> false

//! Negation examples

let check7 = 4 > 3; // true
let check8 = !(4 > 3); //  false
let isLightOn = true;
let isLightOff = !isLightOn; // false
let isMarried = !false; // true

// Increment Operator
// In JavaScrip we use the increment operator to increase a value stored in a variable.
// The increment could be pre or post increment. Let us see each of them:

// Pre increment
let count1 = 0;
console.log(++count1); // 1
console.log(count1); // 1

//  Post-increment

let count2 = 0;
console.log(count2++); // 0
console.log(count2); // 1

// Ternary Operators

let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
isRaining = false;

// isRaining
//   ? console.log("You need a rain coat.")
//   : console.log("No need for a rain coat.");

let number = 5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
number = -5;

// This the ternary operator
// number > 0
//   ? console.log(`${number} is a positive number`)
//   : console.log(`${number} is a negative number`)

// Window prompt() method

let number2 = prompt("Enter number", "number goes here");
console.log(number);
