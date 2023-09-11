//For Of Loop

let arr = [2,4,6,8,10];

for(const num of arr){
    // console.log(`${num}`);
}

const greeting = "Sameer Khan";
for (const greet of greeting){
    // console.log(greet);
}



//Maps

const map = new Map();   //-->Map objects are collection of key-value pair. It don't show the already submitted value again. It only stores the unique value. 
//Map is not iteratable.
map.set("IN","India")
map.set("USA","United State of America")
map.set("FR","France")
map.set("UK","United Kingdom")

// console.log(map);

// for(const mapVal of map){            //Shows value without any general syntax of Map
//     console.log(`${mapVal}`);
// }

// for(const [key,value] of map){          //Show valuee in Key and Value format
//     console.log(`${key} => ${value}`);
// }

const obj = {
    name:"Sameer",
    age:18
}

// for(const objVal of obj){
//     console.log(objVal);      //For-of loop can't iterate the value of objects, but For-in loop can iterate.
// }
