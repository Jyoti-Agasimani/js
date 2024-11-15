// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const jsUser = {
    name: "Jyoti",
    "full name": "Jyoti Agasimani",
    [mySym]: "mykey1",
    age: 22,
    location: "bgm",
    email: "sshv@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Staurday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email  = "jyoti@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "jyoti@chatgpt.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

