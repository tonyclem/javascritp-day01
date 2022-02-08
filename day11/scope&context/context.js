// context is about objects
// context in Javascript is centered around the (this) keyword

let person = {
  firstName: "Clement",
  lastName: "Anthony",
  driveCar() {
    function itFunction() {
      console.log(this);
    }
    itFunction();
    console.log(this.firstName + " " + this.lastName + " is diving a car.");
  },
};

person.driveCar();

function breath() {
  console.log(
    this.firstName + " " + this.lastName + " just inhaled and exhaled."
  );
}

breath.call(person);
// (this) keywork is pointing towards our peron object
