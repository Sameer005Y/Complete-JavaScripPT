// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2<=1)
// console.log(2==1)
// console.log(2!=1)


//In this operation, string "2" and "02" will automatically be converted into number, but sometimes the code will not give the predictable result. So, Don't use this. *****//
// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0)  //==>False
// console.log(null == 0)  //==>False
// console.log(null >= 0)  //==>True
// The reason is that an equality check( == ) and comparison( ><  <=  >= ) work differently
// Comparisons convert Null to a number, treating it as 0.
// that is why (3) null >= 0 is true and (1) null > 0 is false.

// Strict Check (===)
// console.log("2" === 2);  // It compares value as well as datatype equality.

