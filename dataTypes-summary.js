//  Primitive 

//  7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNmber = 35687889886476n



//  Reference (Non primitive)

//  Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name:  "jyoti",
    age: 22,
}

 const myFunction = function(){
    console.log("Hello world");
    
 }

 console.log(typeof heros);