//Reduce

const myNums = [1,2,3];

// const myTotal = myNums.reduce((acc, curr) => {
//     console.log(` Acc: ${acc} and curr: ${curr}`);
//     return (acc + curr);
// },0);

const myTotal = myNums.reduce((acc,crr) => (acc+crr),0);
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "web dev",
        price: 599
    },
    {
        itemName: "Android Development",
        price: 4999
    },
    {
        itemName: "Data Science",
        price: 12999
    }
];

const totalPrice = shoppingCart.reduce((acc,item) => acc + item.price, 0)
//expected output:-18597.
console.log(totalPrice);