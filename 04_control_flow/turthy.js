const userEmail = []

if (userEmail) {
    console.log("got user email");    
}else{
    console.log("Don't have user email");    
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy vlaues
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");   
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); 
}

// Nullish Coalesing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

//  Terniay Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80")
