// ============ Object oriented ============ //

// JavaScript uses functions as classes to create objects using the new keyword. Here is an example:
function Person(firstName, lastName) {
  // construct the object using the arguments
  this.firstName = firstName;
  this.lastName = lastName;

  // a method which returns the full name
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

let myFullName = new Person("Clement", "Sunday");
console.log(myFullName.fullName());

// Creating an object using the new keyword is the same as writing the following code:
// Example 2
let student = {
  first: "Clement",
  last: "Sunday",
  age: "27",
  height: 180,
  studentInfo: function () {
    return this.first + "\n" + this.age + "\n" + this.last;
  },
};
// console.log(student.last )
student.first = "Anthony"; // change value
// console.log(student.first)
student.age++;
console.log(student.age);

console.log(student.studentInfo());

// Examplex 3
let myPerson = {
  firstName: "Clement",
  lastName: "Sunday",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
