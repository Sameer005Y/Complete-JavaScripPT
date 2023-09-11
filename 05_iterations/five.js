//For-Each Loop
// ["","",""]
// [{},{},{}]


const programming = ['js','ruby','cpp','java','py','.net'];

programming.forEach( function (key) {   //using normal function in for each loop to iterate
        // console.log(key);
} )

programming.forEach( (keyVal) => {      ////using Arrow function in for each loop to iterate
    // console.log(keyVal);
})

programming.forEach( (keyVal,index,arr) => {      
    // console.log(keyVal ,  index ,  arr );
})


const myCoding = [
    {
        languageName : "JavaScript",
        LaguageFileName : "Js"
    },
    {
        languageName : "Python",
        LaguageFileName : "py"
    },
    {
        languageName : "C++",
        LaguageFileName : "cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})