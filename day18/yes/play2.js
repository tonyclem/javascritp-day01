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

const task_names = 25;
// const total = 0;
function computeEarnings(mondayTasksArr, hourlyRateVar) {
  let total = 0;
  mondayTasksArr.forEach((tasks) => (total += tasks.duration));
  console.log(total);
  return `€${(total / 60) * hourlyRateVar}`;
}
computeEarnings(tasks, task_names);

// for (let i = 0, max = tasks.length; i < max; i += 1) {
//     total += tasks[i].duration
//   task_names.push(tasks[i].duration);
// }
// for (let i = 0; i < tasks.length; i++) {
//   total += tasks[i].duration;
//   //   task_names.push(tasks[i].duration)
// }
