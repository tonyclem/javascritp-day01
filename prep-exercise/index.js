function helloWorld() {
  return "hello World";
}
function welcomeToVScode() {
  return helloWorld();
}
welcomeToVScode();

// Example II

let arrItem = ["love", "wisdom", "courage", "understanding", "unity"];
if (arrItem.find((tag) => tag === "courage")) {
  console.log("yes is there");
} else {
  console.log("no sorry");
}
