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

// Example III

const longerWords3 = (str) => {
  let words = str.split(" ");
  let string = "";

  for (let word of words) {
    if (word.length > string.length) {
      string = word;
    }
  }
  return string;
};
console.log(longerWords3("hello world with love it Sundays"));
console.log(longerWords3("it Tuesday evening it Iniovo"));

// Example IIII
const longerWords4 = (str) => {
  let words = str.split(" ");
  let size = 0;
  let max = [""];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= size) {
      words[i].length = size;
      if (max[max.length - 1].length < words[i].length) {
        max = [];
        max.push(words[i]);
      } else {
        max = [...max, words[i]];
      }
    }
  }
  return [...max];
};

console.log(longerWords4("hello world good morning morning"));
console.log(longerWords4("i have project to build"));
