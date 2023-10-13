const name = "sandesh"
const mobileNo = " 7057629204"
// console.log(name + mobileNo); bad way 

// console.log(`Hello my name is ${name} and my mobile number is ${mobileNo}`);

const gameName = new String('sandesh wankhede')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf('w'));

const newString = gameName.substring(0,3)
console.log(newString);

const newStringOne ="    sandy    "
console.log(newStringOne);
// .trim remove unwanted white spaces
console.log(newStringOne.trim());

// replace function
const url = "www.sandy20%com"
console.log(url);
console.log(url.replace('20%','.'));