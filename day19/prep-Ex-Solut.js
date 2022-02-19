const getPeopleOfClass = (className) => {
  const s = students.map((className) => {
    if (className.graduated === false) {
      return `[the current Student name is: { ${className.name} at ${className.class} }]`;
    }
    return `${className.graduated}`;
  });

  const m = mentors.forEach((mentor) => {
    if (mentor.nowTeaching === "javascript") {
      return `The teacher is ${mentor.name} and is teaching ${mentor.nowTeaching}`; // ?
    }
    if (mentor.nowTeaching === "react") {
      return `The teacher name is ${mentor.name} and is teaching ${mentor.nowTeaching}`;
    }
  });

  return `[the current Student name is: { ${s.name} at ${s.class} }]`; //?
};
// console.log(getPeopleOfClass("class34"));
console.log(getPeopleOfClass(students, mentors));
