
function satMyName(){
    console.log("J");
    console.log("y");
    console.log("0");
    console.log("t");
    console.log("i");
}

// satMyName()

// function addTwoNumbers(number1, number2){
    
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 4)

// console.log("Result:", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return    
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("jyoti"))
// console.log(loginUserMessage("jyoti"))

function calculateCarPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCarPrice(200, 300, 400, 500))

const user = {
    username: "jyoti",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 700]
function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));