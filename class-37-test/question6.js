const countElements = (arr = [], element) => {
  if (!Array.isArray(arr)) {
    return 0;
  }

  let counter = 0;

  arr.forEach((item) => {
    if (item === element) {
      counter = counter + 1;
    }
  });

  return counter;
};

/**
 * TEST CODE: ONLY EDIT THIS
 * We've provided some syntax for you but feel free to change it to your liking! It should follow jest syntax though!
 *
 * To run the test make sure you have done an `npm install` command in your terminal and then run `npm t` or `npm run test`
 */
describe("countElements", () => {
  it("Array of numbers", () => {
    expect(countElements([1, 2, 3, 4, 5], 2)).toBe(1);
    expect(countElements([1, 2, 3, 4, 5], 3)).toBe(1);
    expect(countElements([1, 2, 3, 4, 5], 5)).toBe(1);
  });

  it("Array of courses in string", () => {
    let arr = [
      "programming",
      "javaScript",
      "python",
      "NodeJS",
      "ReactJS",
      "ReactNative",
      "NodeJs",
    ];
    expect(countElements(arr, "javaScript")).toBe(1);
    expect(countElements(arr, "ReactJS")).toBe(1);
    expect(countElements(arr, "ReactNative")).not.toBe(5);
    expect(countElements(arr, "NodeJs")).toBe(1);
  });
});
