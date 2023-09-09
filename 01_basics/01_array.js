//Arrays

let arr = [3,42,53,22,'Sameer'];

for(let i=0;i<arr.length;i++){
    // console.log(arr[i]);
}

//Array methods

// arr.push(44);
// arr.pop();
// arr.unshift(89);    //Insert element on the first index of an array
// arr.shift();        //Remove element from the first index of an array
// console.log(arr.includes(9));   //It checks whether the value is in the array or not and returns the result in Boolean.
// console.log(arr.indexOf(5));    //returns -1 if the value is not in array

const arr2 = arr.join();   //Join method binds the data and convert it into String from Object
// console.log(arr2);

//Slice, Splice

console.log(arr2.slice(1,3));   //Show value from index 1 to 2.
console.log(arr2.splice(1,3));  //Show value from index 1 to 3.
