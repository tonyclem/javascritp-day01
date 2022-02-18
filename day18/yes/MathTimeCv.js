var time = "7:30:00";
var amount =
  time
    .split(":") //?
    .map((a, b) => a / 60 ** b) // ?
    .reduce((a, b) => a + b) // ?
    .toFixed(2) * 25; // ?
console.log(amount);

function getAmount(timeSpent) {
  var amountPerhour = 100;
  var time = timeSpent.split(":");
  var hours = time[0];
  var mins = time[1];
  var secs = time[2];

  if (secs != undefined && secs > 29) {
    mins++; //?
  }
  var amount = (+hours + +mins / 60) * amountPerhour;
  return parseFloat(amount).toFixed(2); // ?
}

console.log(getAmount("1:25:58"));

let hours = 7;
let minutes = 30;
let seconds = 00;
let amount2 = 25;

let result =
  hours * amount2 + (minutes * amount2) / 60 + (seconds * amount2) / 3600;

const formatCash = (n) => {
  if (n < 1e3) return n;
  if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
};

console.log(formatCash(2500));

Math.abs((450 / 60) * 25); // ?
