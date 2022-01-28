// From here is the example: https://www.javascripttutorial.net/javascript-ternary-operator/

// When you want to execute a block if a condition evaluates to true, you often use an if…else statement. For example:

//  Example 1
let age = 18;
let message;

if (age >= 16) {
  message = "You can drive.";
} else {
  message = "You cannot drive.";
}

console.log(message);

//  same is diffrence way ternary operator

// condition ? expressionIfTrue : expressionIfFalse;

let ages = 18;
let messages;

ages >= 16 ? (messages = "You can drive.") : (messages = "You cannot drive.");

console.log(messages);

// Example 2
let agess = 18;
let messagess;

messagess = age >= 16 ? "You can drive." : "You cannot drive.";

console.log(messagess);

// Example 3

let authenticated = true;
let nextURL = authenticated
  ? (alert("You will redirect to admin area"), "/admin")
  : (alert("Access denied"), "/403");

// redirect to nextURL here
console.log(nextURL); // '/admin'

// Example 4
let speed = 90;
let message = speed >= 120 ? "Too Fast" : speed >= 80 ? "Fast" : "OK";

console.log(message);
