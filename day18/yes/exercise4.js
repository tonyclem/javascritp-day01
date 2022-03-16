fruits = [
  { description: "orange", Amount: 50 },
  { description: "orange", Amount: 50 },
  { description: "apple", Amount: 75 },
  { description: "kiwi", Amount: 35 },
  { description: "watermelon", Amount: 25 },
];
const small = fruits
  // .map((item) => item.Amount)
  .reduce((prev, item) => prev + item.Amount, 0);
console.log(small); // ?
