function calculateDogAge(age) {
  // calculate dog age
  // 1 human year = 7 dog years
  // dogAge = 7
  // age * dagAge
  const dogAge = 7;
  const dogYear = age * dogAge;
  return `Your doggie is ${dogYear} years old in dog years!`;
}

function calculateDogAge2(age) {
  const dogAge = 7;
  return `Your doggie is ${age * dogAge} years old in dog years!`;
}

function main() {
  console.log(calculateDogAge(1)); // -> "Your doggie is 7 years old in dog years!"
  console.log(calculateDogAge(2)); // -> "Your doggie is 14 years old in dog years!"
  console.log(calculateDogAge(3)); // -> "Your doggie is 21 years old in dog years!"
  console.log(calculateDogAge(4)); // -> "Your doggie is 28 years old in dog years!"
  console.log(calculateDogAge(10)); // -> "Your doggie is 28 years old in dog years!"
}

main();
