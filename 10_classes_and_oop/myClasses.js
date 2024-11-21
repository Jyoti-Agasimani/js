// //  ES6

class User {
    constructor(username, email,passowrd){
        this.username = username;
        this.email = email;
        this.passowrd = passowrd
    }

    encryptPassowrd(){
        return `${this.passowrd}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai24@gmail.com", "123")

console.log(chai.encryptPassowrd());
console.log(chai.changeUsername());

//  behind the scene

function User1(username, email,passowrd){
    this.username = username;
    this.email = email;
    this.passowrd = passowrd
}

User1.prototype.encryptPassowrd = function(){
    return `${this.passowrd}abc`
}
User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea24@gmail.com", "123")

console.log(tea.encryptPassowrd());
console.log(tea.changeUsername());