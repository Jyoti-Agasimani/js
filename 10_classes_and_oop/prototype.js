// let myName = "jyoti   "
// let myName1 = "swari   "

// console.log(myName.trueLength);


let myHeros = ["abc", "xyz"]


let heroPower = {
    abc: "hammer",
    xyz: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.abc}`);    
    }
}

Object.prototype.jyoti = function(){
    console.log(`jyoti is present in all object`);
}

Array.prototype.heyJyoti = function(){
    console.log(`jyoti hello`);
    
}

// heroPower.jyoti()
// myHeros.jyoti()
// myHeros.heyJyoti()
// heroPower.heyJyoti()

// inheritance

const User = {
    name: "chai",
    email: "gjh@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//  modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiaurcode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"jyoti".trueLength()
"iceTea".trueLength()