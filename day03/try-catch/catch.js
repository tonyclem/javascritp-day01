// From freecodecamp

// link: https://javascript.info/try-catch

/* Try, catch, finally */

try {
  console.log("Start of try runs");

  unicycle;

  console.log("End of try runs -- never reached");
} catch (err) {
  console.log("Error has occured: " + err);
} finally {
  console.log("This is always run");
}

console.log("...Then the execution continues");

//  Example with json

let json = '{ "age": 30 }';

try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  console.log(user.name);
} catch (e) {
  console.log("JSON Error: " + e);
}

//   Example

("use strict");

try {
  alert("Start of try runs"); // (1) <--

  // ...no errors here

  alert("End of try runs"); // (2) <--
} catch (err) {
  alert("Catch is ignored, because there are no errors"); // (3)
}
// Example

try {
  alert("Start of try runs"); // (1) <--

  lalala; // error, variable is not defined!

  alert("End of try (never reached)"); // (2)
} catch (err) {
  alert(`Error has occurred!`); // (3) <--
}

// To catch an exception inside a scheduled function, try...catch must be inside that function:
setTimeout(function () {
  try {
    noSuchVariable; // try...catch handles the error!
  } catch {
    alert("error is caught here!");
  }
}, 1000);
