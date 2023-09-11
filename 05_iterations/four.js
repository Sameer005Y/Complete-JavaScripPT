const myObject = {
    js:'JavaScript',
    rb:'Ruby',
    cpp:'C++',
    swift:'Swift by Apple'
}

for(const obj in myObject){
    // console.log(obj);
}


const programming = ['js','ruby','cpp','java','py','.net'];
for(const key in programming){
    // console.log(key);  // It will return index of array
    // console.log(programming[key]);
}


const map = new Map(); 
map.set("IN","India")
map.set("USA","United State of America")
map.set("FR","France")
map.set("UK","United Kingdom")

for(const mapVal in map){
    // console.log(mapVal);      //Map is not iteratable.
}

