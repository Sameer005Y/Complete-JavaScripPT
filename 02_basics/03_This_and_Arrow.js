const user = {
        username : "Sameer",
        Price:999,
        welcomMessage : function(){
            // console.log(`${this.username}, welcome to website`);
            console.log(this);
        }
}

// user.welcomMessage();
// user.username = "Sam";
// user.welcomMessage();

const any = function(){
    const userName = "Sameer";
    console.log(this.userName);  //--> Expected output Undefined because this refers to global object which is not defined.
}
// any();

//Arrow Function
const any2 = () => {
    const id = 'BTIT9008';
    console.log(this.id);
}
// any2();

//Pure Arrow Function
const addThree = (num1,num2,num3) => {
    return num1+num2+num3;
}
// console.log(addThree(4,3,3));


// const addTwo = (num1,num2) => num1+num2;  ///--> Implicit Return arrow function

// const addTwo = (num1,num2) => (num1+num2);  ///--> Implicit Return arrow function
// const res = addTwo(2,4);
// console.log(res);