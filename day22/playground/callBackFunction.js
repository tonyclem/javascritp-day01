let students = [
  { name: "cle", score: 80, location: "East" },
  { name: "clement", score: 90, location: "West" },
  { name: "sunday", score: 80, location: "North" },
  { name: "junior", score: 50, location: "South" },
  { name: "senior", score: 90, location: "West" },
  { name: "secondary", score: 80, location: "East" },
];

let studentFun = function (obj, callBack) {
  obj.forEach((ob) => {
    if (ob.location.toLowerCase() === "east") {
      if (typeof callBack === "function") {
        callBack(ob);
      }
    }
  });
};

studentFun(students, function (obj) {
  if (obj.location === "East") {
    console.log(obj.name + " good score");
  }
});

let addAll = function () {
  let total = 0;
  count = 0;

  studentFun(students, function (obj) {
    total = total += obj.score;
    count++;
  });

  console.log("add all score: " + total + " :get the iteration: " + count);
};

addAll();
