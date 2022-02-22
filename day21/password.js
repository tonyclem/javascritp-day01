const passwordList = [
  { times: "1-3", letter: "a", password: "abcde" },
  { times: "1-3", letter: "b", password: "cdefg" },
  { times: "2-9", letter: "c", password: "ccccccccc" },
];

passwordList.map(({ password, times, letter }) => {
  const appearances = password.split("").filter((l) => l === letter).length;
  const [minTimes, maxTimes] = times.split("-").map((t) => parseInt(t, 10));

  const isValid = appearances >= minTimes && appearances <= maxTimes;

  return isValid ? "VALID" : "INVALID";
}); // ?
