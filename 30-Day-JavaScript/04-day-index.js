// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const bornYear = (br) => {
  return br.filter((b) => b.year <= 1600 && b.year >= 1500);
};

const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorName = (name) => {
  return name.map((na) => `${na.first} ${na.last}`);
};

// console.log(inventorName(inventors))

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// Solution
let sortArr = inventors.sort((a, b) => a.year - b.year);
const sortFunc = (sortV) => {
  return sortV.sort((a, b) => b.year - a.year);
};
// console.log(sortFunc(inventors));

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const allYearTo = (add) => {
  return add.reduce((sum, item) => sum + item.passed - item.year, 0);
};
// console.log(allYearTo(inventors))
// Solution
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// 5. Sort the inventors by years lived
const sortIn = (arr) => {
  return arr.sort((sum, item) => item.passed - sum.passed);
};
  // console.log(sortIn(inventors));
const oldest = inventors.sort(function (a, b) {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;
  return lastInventor > nextInventor ? -1 : 1;
});
// console.log(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const listFunc = (arr, str) => {
  let result = arr.filter((a) => a.includes(str));
  return result;
};

// console.log(listFunc(people, "de"));

// 7. sort Exercise
// Sort the people alphabetically by last name
const soreP = (names) => {
  // return name.sort((a,b)=>{
  //     let [aLast] = a.split(",");
  //     let [bLast] = b.split(",");
  //     return aLast.localeCompare(bLast);
  // })
  //   return names.map((name)=>{
  //       let [first,last] = name.split(", ");
  //       return last.trim() + " " + first.trim();
  //   }).sort();
  return names
    .map((name) => {
      let [firstName, lastName] = name.split(" ");
      return lastName + ", " + firstName;
    })
    .sort();
};
// console.log(soreP(people));

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

let sum = (arr) => {
  return arr.reduce((a, b) => {
    if (a[b]) {
      a[b]++;
    } else {
      a[b] = 1;
    }
    return a;
  }, {});
};
// console.log(sum(data));

const transportation = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

// console.log(transportation);
