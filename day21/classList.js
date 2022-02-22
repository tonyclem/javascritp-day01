const mentors = [
  {
    name: "Stas",
    canTeach: ["javascript", "browsers", "using-apis"],
    nowTeaching: "javascript",
  },
  {
    name: "Andrej",
    canTeach: ["using-apis", "node"],
  },
  {
    name: "Shriyans",
    canTeach: ["react"],
    nowTeaching: "react",
  },
  {
    name: "Yash",
    canTeach: ["javascript", "using-apis"],
  },
  {
    name: "Rohan",
    canTeach: ["html/css/git", "javascript", "node"],
  },
  {
    name: "Collin",
    canTeach: ["browsers", "using-apis", "node"],
  },
];

const students = [
  { name: "Fede", class: "class33", gitHubName: "fedefu", graduated: false },
  { name: "Tjebbe", class: "class32", gitHubName: "Tjebbee", graduated: true },
  { name: "Rob", class: "class34", gitHubName: "robvk", graduated: false },
  {
    name: "Wouter",
    class: "class35",
    gitHubName: "wouterkleijn",
    graduated: false,
  },
];

const ourStudents = students.filter((student) => student.graduated !== true);
const presentStudent = ourStudents.map(({ name }) => ({
  name,
  role: "Student",
}));
console.log(presentStudent);

const getMentor = mentors.map(({ name }) => ({ name, role: "mentor" }));
console.log(getMentor);
