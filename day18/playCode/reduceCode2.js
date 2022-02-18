const companies = [
  { name: "Company One", end: 2004 },
  { name: "Company Two", end: 2008 },
  { name: "Company Three", end: 2007 },
  { name: "Company Four", end: 2010 },
  { name: "Company Five", end: 2014 },
];

const industries = companies.reduce((wareHouse, company) => {
  const industry = company.end;
  if (wareHouse[industry] == null) wareHouse[industry] = [];
  wareHouse[industry].push(company);
  return wareHouse;
}, {});

console.log(industries);
