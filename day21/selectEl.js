let creatures = [
  { name: "Shark", habitat: "Ocean" },
  { name: "Whale", habitat: "Ocean" },
  { name: "Lion", habitat: "Savanna" },
  { name: "Monkey", habitat: "Jungle" },
];

const choice = creatures.map(({ name, habitat }) => ({
  name,
  habitat,
}));
// console.log(choice);

const selectName = creatures.filter((name) => name.habitat === "Ocean");
console.log(selectName);
const selectOneEl = selectName.filter((select) => select.name === "Shark");
console.log(selectOneEl);
