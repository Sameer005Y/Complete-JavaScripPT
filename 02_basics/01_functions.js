function hello(){
    console.log("Hello world");
}
// console.log(hello());

function addTwoNumbers(number1, number2){
    return number1+number2;
}
const res = addTwoNumbers(2,6);
// console.log(res);

function LoginUserName(UserName){
    if(UserName==undefined){
        console.log("Please Enter UserName!!!");
        
    }
    else{
    return `${UserName} just Logged In`;
    }
}
// const res2 = LoginUserName();
// console.log(res2);

function calculateCartPrice(...num1){  //-->This '...' is also called as Rest Operator while using in functionas arguments
    return num1;
}
// console.log(calculateCartPrice(22,100,999,399));


let Obj = {
    name:"Sam",
    age:18,
    course:"JavaScript"
}
function ObjFunction(ObjValue){
    console.log(`My name is ${ObjValue}`);
}
// ObjFunction(Obj.name);

const MyNewArray = [200,400,500,600];
function returnSecondValue(getValue){
    return getValue[1];
}
// console.log(returnSecondValue(MyNewArray));
