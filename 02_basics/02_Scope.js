let a = 200;

if(true){
    let a = 30;
    let b = 20;
    let c = 50;
    // console.log(`INNER : ${a}`);
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const userName = "Sameer";

    function two(){
        const website = "Youtube";
        console.log(userName);
    }
    // console.log(website);

    two();
}
// one();

if(true){
    const userName = "Sam";
    if(userName === "Sam"){
        const website ="Youtube";
        // console.log(userName + website);

    }
    // console.log(website);
}
// console.log(userName);

//********************************************************** */

function addOne(num){
    return num+1;
}
// console.log(addOne(1));

const addTwo = function(num2){
    return num2+2;
}
// console.log(addTwo(3));