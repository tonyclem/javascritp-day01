const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Companies
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

// Loop function
let total = 0;
for (let i = 0; i < ages.length; i++) {
  total += ages[i];
}
console.log(`the total is ${total}`);

// Function
const reduceAges = ages.reduce(function (key, index) {
  return key + index;
}, 0);
console.log(`the reduce total ${reduceAges}`);

// ArrFunc
const arrowFuncAges = ages.reduce((key, index) => key + index, 0);
console.log(`this Arrow func ${arrowFuncAges}`);

// Companies total
const totalCompanies = companies.reduce(function (total, company) {
  return (total += company.start - company.end);
}, 0);
console.log(totalCompanies);

// Arrow func
const totalCompaniesArrFunc = companies.reduce(
  (total, company) => (total += company.start - company.end),
  0
);
console.log(totalCompaniesArrFunc);
