// Break

//  Breaks the statement or in normally the cases break the loop.
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// Division

for (let i = 5; i < 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`The division reminder of the number ${i} is 0`);
    break;
  }
  console.log(i);
}

// 5, 6, 7,8,9,10,11,12,13,14,The division reminder of the number 15 is 0

// Continue
// So if break, ends the loop what the continue statement does? That’s right, it jumps the loop in that iteration and continues to the next iteration.
// In other words, when the continue condition is met, it will not run or print it and it goes straight to the next iteration
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
} // excepted output:5

var music = [
  "placebo",
  "smashing Pumpkins",
  "pearl jam",
  "ornatos violeta",
  "feromona",
];
for (var i = 0; i < music.length; i++) {
  if (music[i] === "ornatos violeta") {
    continue;
  }
  console.log(music[i]);
} // excepted output: ornatos violeta

// Exmample

var music2 = [
  "placebo",
  "smashing Pumpkins",
  "pearl jam",
  "ornatos violeta",
  "feromona",
];
if (music.includes("placebo")) {
  console.log(true);
} else if (music[0] === "feromona") {
  console.log(false);
} else {
  console.log(okay);
}

// Example loop and push
const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
