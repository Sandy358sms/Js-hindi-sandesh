// Map
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (nums)=> nums + 10)
// const newNums = myNums.map( (nums)=> {
//     return nums + 50
// })

// chaining :=> can apply map and filter at a time

const newNums = myNums
                    .map( (nums)=> nums * 10)
                    .map( (nums)=> nums + 2)
console.log(newNums);