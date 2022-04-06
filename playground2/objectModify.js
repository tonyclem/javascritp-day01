let myObject = { name: "John", age: 30, city: "New York" };
if (myObject.name) {
  console.log("Name: " + myObject.name);
}
if (myObject.age) {
  console.log("Age: " + myObject.age);
} else {
  console.log("Age: " + "Unknown");
}

// Example II Stringify
const user = {
  name: "John",
  favoriteBooks: ["The Secret", "The Power of Your Conscious Mind"],
};

console.log(JSON.stringify(user));
