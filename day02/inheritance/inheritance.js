//  ================= Inheritance ====================== //

// JavaScript uses prototype based inheritance.
// Every object has a prototype,
// and when a method of the object is called then JavaScript tries to find the right function to execute from the prototype object.

// Without using the prototype object, we can define the object Person like this:
// Example of object oriented
function Person1(name, age) {
  this.name = name;
  this.age = age;

  function describe() {
    return this.name + ", " + this.age + " years old.";
  }
}

// However, if we use the Person.prototype object and assign a function to it, it will also work.
// here is inheritance
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.describe = function () {
  return this.name + ", " + this.age + " years old.";
};

// Exaple
var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.describe = function () {
  return this.name + ", " + this.age + " years old.";
};

var Student = function () {};
Student.prototype = new Person();

Student.prototype.learn = function (subject) {
  console.log(this.name + " just learned " + subject);
};

var me = new Student();

me.initialize("John", 25);
me.learn("Inheritance");

// As we can see in this example, the initialize method belongs to Person and the learn method belongs to Student, both of which are now part of the me object.
// Keep in mind that there are many ways of doing inheritance in JavaScript, and this is just one of them.

// Example prototypes
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
alert(rabbit.eats); // true (**)
alert(rabbit.jumps); // true

// Here the line (*) sets animal to be the prototype of rabbit.

// The prototype chain can be longer:

let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)

// Example

// animal has methods
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal,
};

// modifies rabbit.isSleeping
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping);

// example from this link: https://javascript.info/prototype-inheritance
// See more here: https://www.learn-js.org/
