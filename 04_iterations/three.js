// for of loop
// ["","",""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const idx of arr) {
    // console.log(idx);
}

const arr2 = ["sandesh", "vinay", "minakshi"]

for (const idx of arr2) {
    // console.log(idx);
}

const greeting = "hello dears!"
for (const greet of greeting) {
    // console.log(`each character in greeting is : ${greet}`);
}

// ******** Map ********
// store unique values
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United State of America")
map.set('Fr',"France")
map.set('IN',"INDIA")
map.set('USA',"United State of America")
map.set('Fr',"France")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-',value);
}
