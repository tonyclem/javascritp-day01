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

// Example  From freeCodeCamp

// JS Nuggets: Objects

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.color;
console.log(myCar.make);
console.log(myCar.color);

myCar["year"] = 1969;
console.log(myCar["model"]);

myCar["Do I like?"] = "I hate my car.";
console.log(myCar["Do I like?"]);

function showProps(obj, objName) {
  var result = "";
  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
  return result;
}
console.log(showProps(myCar, "myCar"));

// Creation: object initializer
var myHonda = { color: "red", wheels: 4, engine: { cylinders: 4, size: 2.2 } };

// Creation: constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var mycar = new Car("Chevy", "Malibu", 1993);
var anothercar = new Car("Mazda", "Miata", 1990);
console.log(mycar.model);
mycar.color = "black";
console.log(mycar.color);

// Creation: Object.create
var Animal = {
  type: "Invertebrates",
  displayType: function () {
    console.log(this.type);
  },
};

var animal1 = Object.create(Animal);
animal1.displayType();

var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType();
