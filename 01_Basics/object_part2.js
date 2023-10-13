const regularUser = {
    email: "sandy@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sandesh",
            lastname: "wankhede"
        }
    }
}

// console.log(regularUser)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {...obj1, ...obj2}
// const obj3 = {obj1, obj2}

// const object.assign({}, obj1, obj2)

//console.log(obj3);

// const tinderUser = {}
//     tinderUser.id = "123sp",
//     tinderUser.name = "sammy"
//     tinderUser.loggedIn = false

//     console.log(tinderUser);
    
//     console.log(Object.keys(tinderUser));

//     console.log(Object.values(tinderUser));

//     console.log(Object.entries(tinderUser));

//     console.log(tinderUser.hasOwnProperty('id'));

const course = {
    coursename: "Biology",
    courseInstructor: "sandy",
    price: "999"
}
// destucture the objct
const {courseInstructor:inst} = course

console.log(inst);

