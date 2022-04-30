const dbTags = [
  {
    id: "t---1",
    name: "Programming",
    color: "#c4ef00",
  },
];
console.log(dbTags);
const DEFAULT_COLOR = "#ffffff";

const extractTags = (videos = []) => {
  videos.forEach((video) => {
    video.tags.forEach((tag) => {
      // if the dbTags array does not contain an element with the tag
      if (!dbTags.some((dbTag) => dbTag.name === tag)) {
        // add a new tag that has a unique id, a name property that contains the tag and a color property that contains the DEFAULT_COLOR
        dbTags.push({
          id: `t---${dbTags.length + 1}`,
          name: tag,
          color: DEFAULT_COLOR,
        });
      }
    });
  });
};

const testVideos = [
  {
    id: "v---1",
    title: "JavaScript for Beginners",
    tags: ["Programming", "JavaScript"],
  },
  {
    id: "v---2",
    title: "C# for Beginners",
    tags: ["Programming", "C#"],
  },
  {
    id: "v---3",
    title: "Cute panda begins to fall over",
    tags: ["Panda", "Animal"],
  },
];

extractTags(testVideos);
