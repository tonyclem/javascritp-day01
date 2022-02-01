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

// Exampl
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

console.log(checkEqual(1, 2)); // 'Not Equal;
