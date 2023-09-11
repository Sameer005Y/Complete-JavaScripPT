const myNum = [1,2,3,4,5,6,7,8,9,10];

// const myres = myNum.map((items)=>{
//     return items+10;
// })


const myres = myNum.map((items)=>{
    return items*10;
}).map((items)=>{
    return items+1;
}).filter((items)=>{
    return items>30;
})

console.log(myres)