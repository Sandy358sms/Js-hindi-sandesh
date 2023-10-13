// singletone
// object.create

// object literals
const JsUser = {
    name: "Sandesh",
    age: 23,
    email: "sandesh@gmail.com",
    isLoggedIn: false,
    lastLoginIn: ["sunday","saturday"]
}
// console.log(JsUser.email);
// Object.freeze(JsUser)
// JsUser.email = "sandy@gmail.com"
// console.log(JsUser["email"]);
// console.log(JsUser);
JsUser.greeting = function(){
    console.log("hello dears");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());