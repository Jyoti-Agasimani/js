const name = "jyoti"
const repoCount = 6

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('jyoti-as')

// console.log(gameName[0]);
// console.log(gameName._proto_);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-4, 4)
console.log(anotherString);

const newStringOne = "  jyoti  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://jyoti.com/jyoti%20agasimani"

console.log(url.replace('%20', '-'))

console.log(url.includes('jyoti'))

console.log(gameName.split('-'));