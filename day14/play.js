let playBoxs = [];
let indexs = 0;

let masterBox = ["hel", "ci", "oh"];
for (let playBox = 0; playBox < masterBox.length; playBox++) {
  let play = masterBox[playBox];
  playBoxs.push(play);
  indexs++;
}
console.log(playBoxs);

console.log(playBox);

// Moves zeroes to the right:
function moveZeroes(array) {
  let i = 0;
  for (let j = 0; j < array.length; ++j) {
    if (i < j) array[i] = array[j];
    if (array[j] != 0) ++i;
  }
  return array.fill(0, i);
}

// Example:
console.log(moveZeroes([0, 1, 0, 3, 12]));

//

var moveZeroes = function (nums) {
  var res = [];
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    nums[i] == 0 ? (count += 1) : res.push(nums[i]);
  }

  for (var j = 0; j < count; j++) {
    res.push(0);
  }

  return res;
};

var input1 = [0, 1, 0, 3, 12];
var input2 = [0, 0, 1];

console.log(moveZeroes(input1));
