// start with strings, numbers and booleans


// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;

// You might think we can just do something like this:
team[3] = "Lux";
// however what happens when we update that array?
team.push("Kai");
// now here is the problem!
team.pop();
// oh no - we have edited the original array too!
console.log(players);
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
let team2 = players;
// So, how do we fix this? We take a copy instead!
team2 = players.slice();
console.log(team2);
// one way
let team3 = [...players];
console.log(team3);
// or create a new array and concat the old one in
let team4 = [].concat(players);
console.log(team4);
// or use the new ES6 Spread
let team5 = [...players];
console.log(team5);
// now when we update it, the original one isn't changed
team5 = ["Poppy", "Lux", "Kai"];
console.log(team5);
// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
const captain = person;
console.log(captain);

// how do we take a copy instead?
let cap2 = Object.assign({}, person , { age: 99 });
// We will hopefully soon see the object ...spread
cap2 = { ...person };
console.log(cap2);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.