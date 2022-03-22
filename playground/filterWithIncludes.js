// create a function that accept two argument, one for the array value and other for the string?
// search the value inside the tags if a value has 'Computer', and you search 'Puter', it should return computer.

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
  },
  {
    id: "v---3",
    title: "Cute panda begins to fall over",
    tags: ["Panda", "Animal"],
  },
  {
    id: "v---4",
    title: "Computer Programming",
    tags: ["Computer", "Technology"],
  },
  {
    id: "v---5",
    title: "Dancing World",
    tags: ["Second", "First"],
  },
];

const lookItem = (item, search) => {
  return item.filter((it) => {
    return it.title.includes(search) || it.tags.includes(search);
  });
};

console.log(lookItem(items, "Comp"));
