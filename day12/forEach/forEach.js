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

// read more about arrowFunc: https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/

//         ============ Arrow function with filter ===================              //

function getTweets(uid) {
  return fetch("//api.users.com/" + uid)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response.data;
    })
    .then((tweets) => {
      return tweets.filter((tweet) => {
        return tweet.stars > 50;
      });
    })
    .then((tweets) => {
      return tweets.filter((tweet) => {
        return tweet.rts > 50;
      });
    });
}

//   getTweets()

//  Same Example Promise //
function getTweets2(uid) {
  return fetch("//api.users.com/" + uid)
    .then((response) => response.json())
    .then((response) => response.data)
    .then((tweets) => tweets.filter((tweet) => tweet.stars > 50))
    .then((tweets) => tweets.filter((tweet) => tweet.rts > 50));
}
