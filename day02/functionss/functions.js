//  function statement
function nameIS(name) {
  return "Good Morning " + name;
}
console.log(nameIS("Clement"));

// anonymous function
let myProfession = function (params) {
  return "Hello " + params;
};

console.log("web Developer");

// Callback
let callBackletPray = function () {
  console.log("Heavenly father, please see us through Amen!");
};

setTimeout(callBackletPray, 8000);

// Callbacks as Anonymous Functions
setTimeout(function () {
  console.log("What do you believe in ?");
}, 9000);

// Arrow Functions
const welcome = (greet) => {
  return "Good day Mr " + greet;
};
console.log(welcome("Kings"));

// Arrow Function, In case that the function only receives one argument we can omit the parenthesis:
const welcomeBack = (greet) => {
  // greet with parenthesis
  return "Good day Mr " + greet;
};
console.log(welcome("Kings"));

// And, in case that we want to do a explicit return of the function and we have only one line of code, we can avoid the return statement and omit brackets too:
const welcomeBackHome = (friend) => "welcome to technology world " + friend;
console.log(welcomeBackHome("Clement"));

// Using an arrow as a callback compared to a normal function:
// old ways
let numbers = [9, 7, 5, 3, 1];
// old Function
function multiplyByTwo(number) {
  return number * 3;
}
let multipliedNumber = numbers.map(multiplyByTwo);
console.log(multipliedNumber);

// New ways
let numbersTwo = [2, 4, 6, 8, 10];
// Using ES6 arrow functions
const multiplyNumByTwo = (number) => number * 3;
let multipliedNumByTwo = numbersTwo.map(multiplyNumByTwo);
console.log(multipliedNumByTwo);
