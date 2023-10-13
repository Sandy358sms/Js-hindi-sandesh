// Immediately Invoked Function Expression (IIFE)
// used to remove pollution from Global sope

// function chai(){
//     console.log(`DB Connected`);
// }

// chai() 

// chai() ko remove krenge by taking all function code into () i.e (function block)()

(function chai(){
    console.log(`DB Connected`);
})();

// ; is imp if not present then error will occure

// DB two
( ()=>{
    console.log(`DB Connected two`);
})();

// DB three
( (name)=>{
    console.log(`DB Connected three ${name}`);
})("sandesh wankhede")