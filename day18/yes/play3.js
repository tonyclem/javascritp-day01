const tasks = [
  {
    name: "Write for Envato Tuts+",
    duration: 120,
  },
  {
    name: "Work out",
    duration: 60,
  },
  {
    name: "Procrastinate on Duolingo",
    duration: 240,
  },
];
let total_time = 0;

tasks.forEach(function (task) {
  total_time += +task.duration;
});

console.log(total_time);
