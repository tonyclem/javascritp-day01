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

let total_time = 0;
const hourlyRate = 25;
mondayTasks.forEach(function (task) {
  total_time += task.duration;
});

console.log(`hello bro ${(total_time / 60) * hourlyRate}`);
