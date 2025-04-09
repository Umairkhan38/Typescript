//js is statically typed henece variable  initialized with value of any data type 
//can not be reassigned a value of different data type  


let p = 2;

//strictly assign a type of a variable in ts alternate way of above
let q:number = 6; 

// compile time error cant re-assigned different data types
// p="khan"

//assigning a type in function

//num default varirable has type -> any it can take any type of input  
// function addNum(c:number , d:number){
//     return c+d;
// }

//but above function can be irrelevent in below context such that we want to add two numbers only 
// addNum(2,"f");


//we can explicitly provide a type to parameters as well as function
function addition(a : number, b: number, c:number) :number{
  
    return a+b+c;
    //Below it throws an error as function return type is number
    // return a+"b";
} 

const result:number = addition(5,6,q);
console.log("Result is ",result)
