let a=400
const b=900
if(true){
   const a=200
   const b=300
   console.log("inner a:",a);
   console.log("inner b:",b);
}

console.log("outer a:",a);
console.log("outer b:",b);