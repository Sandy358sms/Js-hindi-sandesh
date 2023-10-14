// forEach loop
// forEach loop doesn't have function name

const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach(function (item){
    // console.log(item);
})

//using arraw function 

coding.forEach((item,index,arr)=>{
   // console.log(item,index,arr)
})

function printme(item){
// console.log(item);
}

coding.forEach(printme)

// array containing may objects

const myCodes = [
    {
        codeLanguage: "c++",
        codeFile: ".cpp"
    },

    {
        codeLanguage: "java",
        codeFile: ".java"
    },

    {
        codeLanguage: "python",
        codeFile: ".py"
    }
]

// using foreach loop to access the all the objects 
// access can be done by --> item.whattoaccess
myCodes.forEach((item)=>{
    console.log(item.codeLanguage,item.codeFile);
})
