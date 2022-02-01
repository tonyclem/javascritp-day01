let randomResult = 0;
let loopCount = 0;

while (!(randomResult == 5)) {
  randomResult = Math.floor(Math.random() * (10 - 2) + 2);
  loopCount++;
}

console.log(`The random result: ${randomResult}`);
console.log(`The number of loops: ${loopCount}`);
