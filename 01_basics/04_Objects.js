const obj = new Object();   //-->Singleton Object
const obj1 = {};            //-->Non- Singleton Object

obj1.Id = "btitl9008";
obj1.name = "Sameer";
obj1.rollNo = 9008;

// console.log(obj1);

const obj3 = {
    Email: 'any@google.com',
    location:'Faridabad',
    fullName:{
        userFullName:{
            firstName:'Sameer',
            middleName: 'Khan',
            lastName: 'Saifi'
        }
    }
}

// console.log(obj3);
// console.log(obj3.fullName);
// console.log(obj3.fullName.userFullName);
// console.log(obj3.fullName.userFullName.firstName);

const obj4 = {1:'a',2:'b'};
const obj5 = {3:'c',4:'d'};
// const obj6 = {obj4 , obj5};
// const obj6 = Object.assign(obj4,obj5);
const obj6 = {...obj4,...obj5};
// console.log(obj6);

const obj7 = [
    {
        name:"Sameer",
        age:18
    },
    {
        name:"Sagar",
        age:20
    },
    {
        name:"Prashant",
        age:21
    }
];

// console.log(obj7[1].age);
// console.log(obj7[2].name);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

//********************************************************************* */
//******************Object De-Structure and JSON*********************** */

const course = {
    courseName:"Js in hindi",
    price: 999,
    courseInstructor:"Hitesh"
}

const {courseInstructor} = course;      //-->this type of declaration is used to reduce redeclaration of a valriable with object Ex:-(obj.var changed to var); We can also give a different name to this variable
const {price : Cost} = course;

console.log(courseInstructor);
console.log(Cost);

//******************************************************************** */
//******************       A P I || JSON       *********************** */

//JSON --> JSON is nothing but an object like syntax but with no declaration of object. It starts with {} bracket to declare object in JSON or with [] to declare array in JSON.

// {
//     name:"Sameer",
//     class:"B.Tech",
//     rollNo:9008
// }

[
    {},
    {},
    {}
]