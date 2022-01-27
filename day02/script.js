//  Exercise 1

// if condition
function checkNumber() {
  if ((checkNumber = 42)) {
    console.log("correct");
  } else {
    console.log("incorrect");
  }
}

// checkNumber(3);      // incorrect
// checkNumber(7);      // incorrect
// checkNumber(42);     // correct

// Exercise 2

// Loop
let i; // Initialization - Initializes the iterator variable i. In this example, we initialize i to 0.
for (let i = 0; i < 3; i = i + 1) {
  // 3 Condition - As long as the condition is met, the loop continues to execute
  console.log(i); //  i++ Increment - A directive which increments the iterator. In our case, we increment it by 1 on every loop.
} //0 1 2

let myArray = ["A", "B", "C"];
for (let i = 0; i < myArray.length; i++) {
  console.log("The member of myArray in index " + i + " is " + myArray[i]);
} // The member of myArray in index 0 is A ...

// While loop Statement
// let index = 99;
// while (true) {
//   console.log(index + " bottles of water on the wall");
//   index -= 1;
//   if (index == 0) {
//     break;
//   }
// } // 99 ... - 1 bottles of beer on the wall

// The continue statement skips the rest of the loop and jumps back to the beginning of the loop. For example, if we would want to print only odd numbers using a for statement, we can do the following:

// for (i = 0; i < 100; i++) {
//   // check that the number is even
//   if (i % 2 == 0) {
//     continue;
//   }
//   //   if we got here, then i is odd.
//   console.log(i + " is an odd number.");
// }

// Object

let mySelf = {
  myName: "Clement",
  myLastNama: "Sunday",
};

mySelf.age = 27;
mySelf["Professio"] = "Web developer";

for (let details in mySelf) {
  if (mySelf.hasOwnProperty(details)) {
    console.log("See more " + details + " is " + mySelf[details]);
  }
}
console.log(mySelf);

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
