// const userEmail = ("Mail@mail.com");
const userEmail = [];

// if(userEmail){      //-->We are assuming that the given parameter in if condition is true.
//     console.log(`My Mail id is: ${userEmail}`);
// }else{
//     console.log("You don't have an Account");
// }

// Truthy:"0", 'false', " ", [], {}, function(){}       //-- Empty function is also a Truthy value. 

// Falsy: 0, -0, BigInt 0n, "", null, undefined, NaN 

// if(userEmail.length === 0){
//     console.log("Array is Empty");
// }

const emptyObj = {};

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;   //--> This operator is used when we want some value but the value entered from user is Null Or undefined
// val1 = null ?? 15;
val1 = undefined ?? 5 ?? 20;
// console.log(val1);


//Terniary Operator 
//Syntax : condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");