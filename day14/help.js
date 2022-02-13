// help i find online
const arr2 = [1, 2, 3];
arr2.forEach((element, index) => {
  arr2[index] = element + 1;
});

// 👇️ [2, 3, 4]
console.log(arr2);

// const arr1 = [1, 2, 3];
// const newArr = arr1.map((element) => element + 1);

// // 👇️ [2, 3, 4]
// console.log(newArr);

var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
var message = "";
for (i in days) {
  message += "Day " + (parseInt(i) + 1) + " is " + days[i] + "\n";
}
console.log(message);
