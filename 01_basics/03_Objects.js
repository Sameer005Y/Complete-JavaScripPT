


//Object Literals

let newSym = Symbol('Saifi_Sameer');
let obj = {
    name:'Sameer',
    "fullName": 'Sameer Khan',    //-->This is an example to explain the difference between using .operator and Square [] brackets to access value from object; Here, We cannot use Dot operator to access this value.
    [newSym]: 'Sameer_Saifi',     //-->We have to use square brackets while declaring and while accessing symbol variable in object
    age:18,
    location: 'Faridabad',
    Email:'sameer0*5s**fi@gmail.com',
    islogged: false,
    lastLoggedinDays: ['Monday','Saturday'],
}

// console.log(obj.name)
// console.log(obj["name"]);  //Square bracket is a better way to access value from an object variable.
// console.log(obj[fullName]);
// console.log(obj[newSym]);

obj.Email = "sameerkhan9625****93@gmail.com";
// Object.freeze(obj);
// obj.Email = "sameerkhan9625****93@youtube.com";     //-->Value will not change because Object is freezed
// console.log(obj["Email"]);

obj.greeting = function(){
    console.log('This is a JavaScript Tutorial');
}
obj.greeting1 = function(){
    console.log(`This is a JS tutorial and My name is ${this.name}`);
}

console.log(obj.greeting());
console.log(obj.greeting1());