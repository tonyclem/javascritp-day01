let challenge = "30 days of javaScript";
console.log(challenge); //  30 days of javaScript
console.log(challenge.length); // 21
console.log(challenge.toUpperCase()); // 30 DAYS OF JAVASCRIPT
console.log(challenge.toLowerCase()); // 30 days of javascript
console.log(challenge.substr(3, 16)); // days of javaScr
console.log(challenge.substring(0, 4)); //  30
console.log(challenge.includes("Script")); // true
console.log(challenge.split()); // [ ' 30 days of javaScript' ]
console.log(challenge.split("")); //
// [
//     '3', '0', ' ', 'd', 'a',
//     'y', 's', ' ', 'o', 'f',
//     ' ', 'j', 'a', 'v', 'a',
//     'S', 'c', 'r', 'i', 'p',
//     't'
// ]

let companys = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companys.split(","));
// [
//     'Facebook',
//     ' Google',
//     ' Microsoft',
//     ' Apple',
//     ' IBM',
//     ' Oracle',
//     ' Amazon'
//   ]
console.log(challenge.replace("javaScript", "Python")); // 30 days of Python
console.log(challenge.charAt(15)); // S
console.log(challenge); // 30 days of javaScript
console.log(challenge.charCodeAt("j")); // 51
console.log(challenge.indexOf("a")); // 4
console.log(challenge.lastIndexOf("a")); // 14
console.log(challenge.indexOf("30")); // 0
console.log(challenge.lastIndexOf("javaScript")); // 11
console.log(challenge.search("30")); // 0
console.log(challenge.trim(" ")); // 30 days of javaScript
console.log(challenge.startsWith("30 days of javaScript")); // True
console.log(challenge.endsWith("30 days of javaScript")); // True
console.log(challenge.match("30 days of javaScript"));
// [
//     '30 days of javaScript',
//     index: 0,
//     input: '30 days of javaScript',
//     groups: undefined
//   ]
console.log(challenge.concat(" 30 days of ", "and ", "javaScript ")); // 30 days of javaScript 30 days of and javaScript
console.log(challenge.repeat("30 days of javaScript")); // 30 days of javaScript 30 days of and javaScript
