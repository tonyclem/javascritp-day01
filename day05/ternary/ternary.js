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

// Example
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

console.log(checkEqual(1, 2)); // 'Not Equal;

// Example
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  } else if (a > b) {
    return "a is greater";
  } else {
    return "b is greater";
  }
}

function findGreaterOrEqual1(a, b) {
  return a === b
    ? "a and b are equal"
    : a > b
    ? "a is greater"
    : "b is greater";
}

//Example
let locked = 1;
let canChange = locked != 1 ? true : false;
console.log(canChange); // false

// Example
let speed = 90;
let message = speed >= 120 ? "Too Fast" : speed >= 80 ? "Fast" : "OK";
console.log(message);
