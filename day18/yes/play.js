const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
];

total = 0;

numArrays.forEach(function (n) {
  n.forEach(function (value) {
    total += value;
  });
});

console.log("Exercise 15 Result: ", total);
