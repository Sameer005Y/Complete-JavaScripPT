let Marvel = ["IronMan", "Thor", 'Captain'];
let DC = ['SuperMan','BatMan','Flash'];

// Marvel.push(DC);
// console.log(Marvel[3][2]);

const res = Marvel.concat(DC);
// console.log(res);

const new_res = [...Marvel,...DC];  //-->Spread Operator ("Spreads all the element of an array");
// console.log(new_res);

const another_arr = [1,3,2,[2,3,4],[3,2,[3,24,4]]]; //-->Very Messi array to understand. So, we use Flat to flat all the array element in one array.
// console.log(another_arr.flat(2)); 
// console.log(another_arr.flat(3)); 
// console.log(another_arr.flat(infinty)); 


// console.log(Array.isArray('Captain Marvel'));
// console.log(Array.from('Captain Marvel'));


let val1 = "Sameer";
let val2 = "Faijan";
let val3 = "Sakib";
console.log(Array.of(val1,val2,val3));