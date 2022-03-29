const capitalizeLetter = (str) => {
  let words = str.split(" ").map((word) => {
    // let firstLetter = word.slice(0, 1);
    // let rest = word.slice(1);
    // firstLetter = firstLetter.toUpperCase();
    // return `${firstLetter}${rest}`;

    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return words.join(" ");
};

console.log(capitalizeLetter("i hello i am clement by name"));
