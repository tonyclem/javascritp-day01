//Spread Operator

// Exaple freecodecamp
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
console.log(thatArray); // [true, true, undefined, false, null]
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));

// Example 3
// Combine Arrays with the Spread Operator

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
  return sentence;
}
console.log(spreadOut());

//   Exmaple 4
let thisArray2 = ["sage", "rosemary", "parsley", "thyme"];

let thatArray3 = ["basil", "cilantro", ...thisArray2, "coriander"];
