// Example From Freecode camp

//JS Nuggets: JSON

// example
var myJSON = {
  name: {
    first: "Beau",
    last: "Carnes",
  },
  age: 33,
  skills: ["juggling", "stiltwalking", "coding"],
  married: true,
  superpowers: null,
};

// stringify method
var stringified = JSON.stringify(myJSON);
console.log(stringified);

// parse method
var stringJSON = '{ "name":"Beau", "kids":2,"state":"Michigan"}';
var myParse = JSON.parse(stringJSON);
console.log(myParse);

//  ==== Json with arrow func ==== //
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
