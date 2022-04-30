let creatures = [
  { name: "Shark", habitat: "Ocean" },
  { name: "Whale", habitat: "Ocean" },
  { name: "Lion", habitat: "Savanna" },
  { name: "Monkey", habitat: "Jungle" },
];

const fun = (getV, s = []) => {
  return getV.filter((n) => {
    return n.name.includes(s) || n.habitat.includes(s);
  });
};
console.log(fun(creatures, "S"));

// const arr = ["understand", "knowledge", "lover"];
// const marge = [
//   ...creatures,
//   ...arr,
//   "clement",
//   { pro: "web Developer", boolean: "true" },
// ];
// console.log(marge);
