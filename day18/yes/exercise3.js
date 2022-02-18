const mondayTasks = [
  {
    name: "Daily standup",
    duration: 30, // specified in minutes
  },
  {
    name: "Feature discussion",
    duration: 120,
  },
  {
    name: "Development time",
    duration: 240,
  },
  {
    name: "Talk to different members from the product team",
    duration: 60,
  },
];
const hourlyRate = 20;

let total = [];
function computeEarnings() {
  // Complete the function names `computeEarnings`. It should take an array of
  // tasks and an hourly rate as arguments and return a formatted Euro amount
  // (e.g: `€11.34`) comprising the total earnings.

  let formatPrice = mondayTasks.reduce(
    (prev, tackRate) => (prev += tackRate.duration),
    0
  );
  console.log(formatPrice); // ? 450
  total.push(formatPrice);
  console.log(total);
}

computeEarnings(mondayTasks);
