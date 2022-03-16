const items = [
  {
    id: "v---1",
    title: "JavaScript for Beginners",
    tags: ["Programming", "JavaScript"],
  },
  {
    id: "v---2",
    title: "C# for Beginners",
    tags: ["world", "C#"],
    data: 8,
  },
  {
    id: "v---3",
    title: "Cute panda begins to fall over",
    tags: ["Panda", "Animal"],
    data: 10,
  },
  {
    id: "v---4",
    title: "Computer Programming",
    tags: ["Computer", "Technology"],
    data: 18,
  },
  {
    id: "v---5",
    title: "Dancing World",
    tags: ["Second", "First"],
    data: 80,
  },
];

let receiveArr = [];

items.forEach((item) => {
  if (item.data > 10) {
    receiveArr.push(item);
  }
});
console.log(receiveArr);
