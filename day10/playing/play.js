// var favAuthor = {
//   name: "Dan Brown",
//   favBook: "Lost Symbol",
//   favCharacter: "Robert Langdon",
// };
// if (favAuthor.hasOwnProperty("favCharacter")) {
//   // true
//   console.log("The property exists");
// } else {
//   console.log("The property does not exist");
// }

// function Myrand(max, min) {
//   arr = [];
//   for (i = 0; i < max; i++) {
//     x = Math.floor(Math.random() * max) + min;
//     if (arr.includes(x) == true) {
//       i = i - 1;
//     } else {
//       if (x > max == false) {
//         arr.push(x);
//       }
//     }
//   }
//   return arr;
// }
// console.log(Myrand(5, 1));

function testBreak(x) {
  var i = 0;

  while (i < 6) {
    if (i == 3) {
      break;
    }
    i += 1;
  }

  return i + x;
}

console.log(testBreak(1));
