const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}
// using for of loop :=> it will not work in case of object
// for of loop will work only in case of map

// for (const idx of myObject) {
//     console.log(idx);
// }

// for (const key in myObject) {
//    console.log(key);
// }  return all keyvalues



for (const key in myObject) {
    // console.log(myObject[key]);

    // console.log(`${key} shortcut is for ${myObject[key]}`);
 }

 // forin on array :=> key will give : 0 1 2 3...

 const arr = ["lal", "bal", "pal"]

 for (const key in arr) {
   //console.log(key);
  // console.log(arr[key]);
 }

 // forof :=> key gives actual string present in array
 for (const idx of arr) {
   // console.log(idx);
 }

//  forin on map 
const map = new Map()
map.set('1',"Marathi")
map.set('2',"Hindi")
map.set('3',"English")
map.set('1',"Marathi")
map.set('3',"English")

// forof :=> work easily
for (const idx of map) {
   // console.log(idx);
}

// forin :=> nothing will print , because it is not iterable
for (const key in map) {
  // console.log(key);
}

// node 04_iterations/four.js

// ***** Note *****
// Object => forin
// Array => forof