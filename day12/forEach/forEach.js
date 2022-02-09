//      =================  ForEach  =======================      //
const professor = {
  name: "Clement",
  skills: ["Html", "Css", "JavaScript", "Node.js", "Api", "React FrameWork"],
  aboutProfessor: function () {
    let result = this;
    this.skills.forEach(function (skill) {
      console.log(`I am ${result.name} my skill's is ${skill}`);
    });
  },
};

professor.aboutProfessor();

// Example 2
const person = {
  firstName: "Clement",
  lastName: "Anthony",
  Hobbies: [
    "Reading",
    "Computer",
    "Communication",
    "Dancing",
    "laughing",
    "playing Chess",
  ],
  aboutHobbies: function () {
    this.Hobbies.forEach((hobby) => {
      console.log(
        `Hello World I'm ${this.firstName} ${this.lastName} my hobbies are: ${hobby}`
      );
    });
  },
};

person.aboutHobbies();
