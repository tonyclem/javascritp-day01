let creatures = [
  { name: "Shark", habitat: "Ocean" },
  { name: "Whale", habitat: "Ocean" },
  { name: "Lion", habitat: "Savanna" },
  { name: "Monkey", habitat: "Jungle" },
];

let aquaticCreatures = creatures.filter(function (creature) {
  return creature.habitat == "Ocean";
});
console.log(aquaticCreatures);

// Example 2
const actual = [1, 2, 3, 4];
function doubleEvenNumbers(numbers) {
  // TODO rewrite the function body using `map` and `filter`.
  const newNumbers = [];
  numbers.filter((number) => {
    if (number % 2 === 0) {
      newNumbers.push(number * 2);
    }
  });
  return newNumbers;
}
console.log(doubleEvenNumbers(actual));
