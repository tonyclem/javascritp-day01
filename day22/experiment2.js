// let creatures = [
//   { name: "Shark", habitat: "Ocean" },
//   { name: "Whale", habitat: "Ocean" },
//   { name: "Lion", habitat: "Savanna" },
//   { name: "Monkey", habitat: "Jungle" },
// ];
const person = ["laptop", "keyboard", "glass", "cup", "star", "map"];
const extract = ["pen", "books", "watch", "headphone"];
const [...laptop] = person;
console.log(laptop);
const newPersonArr = person.concat(extract);
const spreadPerson = [...person, ...extract];
console.log(newPersonArr);
console.log(spreadPerson);
// console.log(laptop);
// console.log(rest);
// console.log();

// Object destructuring
const Profess = {
  job: "Web Developer",
  lover: "Reading Books",
  learn: "Programming",
};

const { job, lover, game = "Chess" } = Profess;
console.log(job);
console.log(lover);
console.log(game);
console.log(Profess);
