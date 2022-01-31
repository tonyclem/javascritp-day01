// Date
const now = new Date();
console.log(now); // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)

// Let's extract or get the full year from a time object.
const now2 = new Date();
console.log(now.getFullYear()); // 2022

// Getting month
const now = new Date();
console.log(now.getMonth()); // 0, because the month is January,  month(0-11)

// Getting date
const now = new Date();
console.log(now.getDate()); // 4, because the day of the month is 4th,  day(1-31)
