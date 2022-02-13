const valueCount = [0, 0, 0, 0, 0];

let valueCountZero = valueCount[0];
let valueCountOne = valueCount[1];
let valueCountTwo = valueCount[2];

let sampleSize = 0;
while (sampleSize < 6) {
  let randomGenerator = Math.ceil(Math.random() * 4);
  let randomValues = randomGenerator;
  if (randomValues === 0) {
    valueCountZero.push(randomGenerator);
  } else if (randomValues === 1) {
    valueCountOne.push(randomGenerator);
  } else if (randomValues === 2) {
    valueCountTwo.push(randomGenerator);
  } else if (randomValues === 3) {
    valueCountThree.push(randomGenerator);
  } else if (randomValues === 4) {
    valueCountFour.push(randomGenerator);
  }
  sampleSize++;
  break;
}

console.log(valueCount);

// let sampleSize = 0;
// while (sampleSize < 6) {
//   let randomGenerator = Math.ceil(Math.random() * 6);
//   let sampleSize = randomGenerator;
//   console.log(sampleSize);
//   break;
// }
