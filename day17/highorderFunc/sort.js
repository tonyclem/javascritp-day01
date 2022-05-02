const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

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

// Sort Companies
const sorted = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sorted);

const sortedCompanies = companies.sort((c1, c2) =>
  c1.start > c2.start ? 1 : -1
);
console.log(sortedCompanies);

// Sorted Ages
const sortedAges = ages.sort((a, b) => a - b);
console.log(sortedAges);

// sort 
function alphabeticalOrder(arr) {
  arr.sort((a, b) => a === b ? 0 : b < a ? 1 : -1)
  return arr
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

// Example
const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let newArr = [...arr]
  const sortArr = newArr.sort((a, b) => a -b)
  return sortArr
}
nonMutatingSort(globalArray);

function nonMutatingSort2(arr) {
  return [].concat(arr).sort((a, b) => {
   return a - b;
 });
}
