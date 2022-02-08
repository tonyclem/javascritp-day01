// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

const ageToDrive = prompt("Enter your age: ");
if (ageToDrive > 18) {
  console.log("You are old enough to drive");
} else if (ageToDrive < 15) {
  console.log("You are left with 3 years to drive.");
} else {
  console.log("wait for the number if years, you needs to turn 18");
}

const ageForDriving = 18;
let notice;
ageForDriving >= 19
  ? (notice = "Sorry you can not drive")
  : (notice = "Yes you make it");
console.log(notice);

//  Exercise 2
//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// Enter your age: 30
// You are 5 years older than me.
const ageValue = prompt("Enter your age: ");
if (ageValue > 25) {
  console.log("You are 5 years older than me.");
} else if (ageValue < 25) {
  console.log("I'm Younger than you.");
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
// ternary operator.
const a = 4;
const b = 3;
if (a > b) {
  console.log("a is greater than b: Yes");
} else if (a < b) {
  console.log("a is less then b: No");
}

// Exercise 3
const c = 4;
const d = 3;
c >= d
  ? (message = "Yes letter 4 is greater 3")
  : (message = "Sorry 3 is less then 4");
console.log(message);

// Exercise 4
// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// let numberOddOrEve = prompt("Enter Even Number or Odd Number: ");
// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.

if (numberOddOrEve == 2) {
  console.log("2 is an even number");
} else if (numberOddOrEve == 9) {
  console.log("9 is an odd number");
}

// Exercise function
const officeItems = [
  "Computer",
  "Files and Documents",
  "Pens and Pencils",
  "Tables and Desk",
];

const companyOffice = (items) => {
  if ("Computer" === items) {
    console.log("Yes, is really essental to us to work with computer");
  } else if ("Files and Documents" === items) {
    console.log("Of course very important cause we need to keep some records");
  } else if ("Pens and Pencils" === items) {
    console.log("Everyone can not do without pen and pencils as well");
  } else if ("Beer" !== items) {
    console.log("So sorry not important, here is for work not party");
  } else {
    console.log("Need more Item in office i think");
  }
};

companyOffice(officeItems);

// Exercise function
const foodGrocery = ["Bananas", "Apple", "Pear", "Pizza"];

const foodItems = (grocerys) => {
  for (let i = 0; i < grocerys.length; i++) {
    const grocery = grocerys[i];
    if (grocery === "Bananas") {
      console.log(
        "Yap fruit is really good for your health, Yes we have Bananas"
      );
    } else if (grocery === "Apple") {
      console.log(
        "Wow eating apple help your health as well. Yes we have Apple"
      );
    } else if (grocery === "Mango") {
      console.log("oh! So sorry we dont have Mango for now ");
    } else if (grocery === "Pear") {
      console.log("Yap you can find pear in our grocery store, we have it");
    } else if (grocery === "Pizza") {
      console.log("Yap of course we have pizza in our store as well");
    } else {
      console.log("You're Welcome to our grocery Market");
    }
  }
};
foodItems(foodGrocery);
