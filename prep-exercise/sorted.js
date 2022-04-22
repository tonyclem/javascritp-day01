let secretCode = "secret$code=secretModule$=secret";

let secretNumber = secretCode.split("$");
let minusEqual = secretNumber.map((item) => {
  return item.replace("=", "");
});
console.log(minusEqual);

// Example II
let sortTheSecretCode =
  "#accessToken=myToken&expiresIn=3600&name&email&picture&";
let sortTheSecretCode2 = sortTheSecretCode.split("&");
let sortTheHash = sortTheSecretCode2.map((item) => {
  return item.replace("#", "");
});
let sortTheEqual = sortTheHash.map((item) => {
  return item.replace("=", "");
});
let joinTheEmpty = sortTheEqual.join(" ");
console.log([joinTheEmpty]);
