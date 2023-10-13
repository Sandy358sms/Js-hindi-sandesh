const user = {
    username: "Sandesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);

        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sandy"
// user.welcomeMessage()

// console.log(this);

function chay(){
    let username = "sandy"
    // console.log(this);
    // bahot sara code deta hai

    console.log(this.username);
    // undefied aayega
}

// chay()



const chai1 = function(){
    let username = "sandy"
    console.log(this.username);
    // => undefined
}

chai1()

const chai = () => {
    let username = "sandy"
    console.log(this.username);
    // => undefined

    console.log(this);
    // {}
}

chai()



// arrow function : ()=>{}

const addTo = (num1, num2) =>{
    return num1 + num2
}

shorthand

// {} rahega to return keyword rahega vice versa
// *** react me kaam aayegi
const addT = (num1, num2) => (num1 + num2)
const result = addT(3,4)
console.log('result: ',result);

const addTwo = (num1, num2) => ({username: "sandesh"})

console.log(addTwo(3,7));
