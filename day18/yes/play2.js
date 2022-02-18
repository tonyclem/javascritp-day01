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

const task_names = [];
const total = 0;
// for (let i = 0, max = tasks.length; i < max; i += 1) {
//     total += tasks[i].duration
//   task_names.push(tasks[i].duration);
// }
for (let i = 0; i < tasks.length; i++) {
  total += tasks[i].duration;
  //   task_names.push(tasks[i].duration);
}

console.log(total); // ?
