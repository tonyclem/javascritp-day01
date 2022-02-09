//      ======= Ternary Oparator  ========= //

// Example 1
let months = 27;
times =
  months > 30
    ? "yes the months complete 30 day great"
    : months < 26
    ? "So sorry this month is short"
    : "it okay then calculation is balances";

console.log(times);

// Exampl 2
let year = 365;

year
  ? console.log("Yes it completed and im happy")
  : console.log("Sorry the years is less");

// Example 3
const week = (c, d) => 4 * 5;
console.log(week());
