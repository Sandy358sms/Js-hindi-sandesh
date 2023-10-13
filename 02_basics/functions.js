function myname(){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("E");
    console.log("S");
    console.log("H");
}
// call function :> function_name -> reference and () ->execution

// myname()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

// addTwoNumbers(2, 4)
// addTwoNumbers(3, "10")
// addTwoNumbers(3, null)

// node 02_basics/functions.js

const result = addTwoNumbers(10, 30)

// console.log("result: ",result);

function loginUserMessage(username){
    if(!username){
    // if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sandy358"));
// ==> Sandy358 just logged in

// console.log(loginUserMessage(""));
// ==> just logged in

// console.log(loginUserMessage());
// ==> Please enter a username 
// undefined

// object
const user = {
    username: "Sandy",
    price: 199
}


function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// call1
// handleObject(user)

// call2
// handleObject({
//     username: "amit",
//     price: 399
// })

// Array
const myArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray));