const longerWords = (str) => {
  let words = str.split(" ");
  let checksWords = "";

  words.forEach((word) =>
    word.length > checksWords.length ? (checksWords = word) : " "
  );
  return checksWords;
};

console.log(longerWords("hello world with love it Clement"));
console.log(longerWords("it Tuesday evening it Clementina"));

// Example II
const longerWords2 = (str) => {
  let words = str.split(" ");
  let size = 0;
  let max = [""];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length >= size) {
      size = word.length;
      if (max[max.length - 1].length < word.length) {
        max = [];
        max.push(word);
      } else {
        max = [...max, word];
      }
    }
  }

  return [...max];
};

console.log(longerWords2("i woke up early today"));
console.log(longerWords2("i eat my broke fast late everyday"));
