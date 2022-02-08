// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

// let ageToDrive = prompt("Enter your age: ");
// if (ageToDrive > 18) {
//   console.log("You are old enough to drive");
// } else if (ageToDrive < 15) {
//   console.log("You are left with 3 years to drive.");
// } else {
//   console.log("wait for the number if years, you needs to turn 18");
// }

let ageForDriving = 18;
let notice;
ageForDriving >= 19
  ? (notice = "Sorry you can not drive")
  : (notice = "Yes you make it");
console.log(notice);

//  Exercise 2
//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// Enter your age: 30
// You are 5 years older than me.
// let ageValue = prompt("Enter your age: ");
// if (ageValue > 25) {
//   console.log("You are 5 years older than me.");
// } else if (ageValue < 25) {
//   console.log("I'm Younger than you.");
// }

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
// ternary operator.
let a = 4;
let b = 3;
if (a > b) {
  console.log("a is greater than b: Yes");
} else if (a < b) {
  console.log("a is less then b: No");
}

// Exercise 3
let c = 4;
let d = 3;
c >= d
  ? (message = "Yes letter 4 is greater 3")
  : (message = "Sorry 3 is less then 4");
console.log(message);

// Exercise 4
// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let numberOddOrEve = prompt("Enter Even Number or Odd Number: ");
// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.
if (numberOddOrEve == 2) {
  console.log("2 is an even number");
} else if (numberOddOrEve == 9) {
  console.log("9 is an odd number");
}
