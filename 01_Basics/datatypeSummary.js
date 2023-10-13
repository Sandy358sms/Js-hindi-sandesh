// Primitive datatypes:
// 7 types : String,Number,null,undefined,Symbol,BigInt,Boolean

// reference (Non primitive) datatypes:
// array,object,function

// const heros = [ironman,batman,hulk];
// console.log(heros);

let myObj = {
    name: "sandy",
    age: 23,
    prn: 21510096,
}

let myfun = function (){
    console.log("hello");
}

// console.log(myObj);

// console.log(myfun);
// console.log("sandesh wankhede");

// **************************
// stack(primitive) and 
// heap(reference)
let myname = "sandesh"
let anothername = "pappu"

anothername = "sandy"

console.log(myname);
// console.log(anothername);
// console.log(anothername);

let userOne = {
    name:"sandesh",
    prn: 21510096
}

let userTwo = {
    name:"pratik",
    prn: 21510094
}
console.log(userOne);
console.log(userTwo);
userTwo = userOne;
console.log(userOne.name);
console.log(userTwo.name);
