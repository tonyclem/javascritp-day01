// Hight order function
const numbers1 = [2, 4, 6, 8, 10];

function addTwo(number) {
  return number + 2;
}
const numbersPlusTwo1 = numbers1.map(addTwo);
console.log(numbersPlusTwo1);
// exmplax 2
const numbers = [2, 4, 6, 8, 10];
const numbersPlusTwo = [];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  const addedTwo = number + 2;

  numbersPlusTwo.push(addedTwo);
}

console.log(numbersPlusTwo);

// Example 3
const ages = [16, 18, 19, 20, 21, 23, 40, 15];

const canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    canDrink.push(ages[i]);
  }
}
console.log(`Yes you can drink you're ${canDrink}!`);

// example 4
const ages2 = [16, 18, 19, 20, 21, 23, 40, 15];
const drive = ages2.filter((age) => {
  if (age >= 19) {
    return true;
  }
});
console.log(`Yes you can drive, your age is ${drive}`);
//  or
const ages3 = [16, 18, 19, 20, 21, 23, 40, 15];
const driveOn = ages3.filter((age) => age >= 19);
console.log(`ohh yes you can do it ${driveOn}`);

// Example Companies
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const retailCompanies = companies.filter(function (company) {
  if (company.category === "Retail") {
    return true;
  }
});
console.log(retailCompanies);

const retailCompanies2 = companies.filter(
  (company) => company.category === "Retail"
);
console.log(retailCompanies2);

// Example 80
const eightyNumber = companies.filter(
  (company) => company.start >= 1980 && company.start <= 1990
);
console.log(eightyNumber);

// Example that lasted 10 year
const lasted = companies.filter((company) => company.end - company.start >= 10);
console.log(lasted);
