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
