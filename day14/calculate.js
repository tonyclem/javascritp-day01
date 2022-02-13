// Trying to solve so problem here
const valueCount0 = [];
const valueCount1 = [];
const valueCount2 = [];
const valueCount3 = [];
const valueCount4 = [];
const valueCount5 = [];
const valueCount6 = [];
let sampleSize = 0;
while (sampleSize < 6) {
  let randomGenerator = Math.ceil(Math.random() * 6);
  let randomValues = randomGenerator;
  if (randomValues === 0) {
    valueCount0.push(randomGenerator);
    valueCount0++;
  }
  if (randomValues === 1) {
    valueCount1.push(randomGenerator);
  }
  if (randomValues === 2) {
    valueCount2.push(randomGenerator);
  }
  if (randomValues === 3) {
    valueCount3.push(randomGenerator);
  }
  if (randomValues === 4) {
    valueCount4.push(randomGenerator);
  }
  if (randomValues === 5) {
    valueCount5.push(randomGenerator);
  }
  if (randomValues === 6) {
    valueCount6.push(randomGenerator);
  }
  sampleSize++;
  break;
}

console.log(
  valueCount0,
  valueCount1,
  valueCount2,
  valueCount3,
  valueCount4,
  valueCount5
);

// let sampleSize = 0;
// while (sampleSize < 6) {
//   let randomGenerator = Math.ceil(Math.random() * 6);
//   let sampleSize = randomGenerator;
//   console.log(sampleSize);
//   break;
// }
