//Basic Types

//the '_' will be ignored by ts we can use this while lage number for separation 
let num2:bigint = 98756656n;
let num:number = 1234_5_6_89
console.log("Num is : ",num)
console.log("Big Int is : ",num2)

let char:string ="Hello world";

let isValid:boolean = true;

let numArr : number[] = [8,6,3,9,];
//cant assign value other than number
// let numArr1 : number[] = [8,6,3,9,"fsd"];

let str:string[] = ["Hello","India"];

//cant be assigned a value other than undefined
let undefine:undefined = undefined;

let nullVal:null = null;

//define type for fields in the object
let obj :{name:string, age:number}=
{
    name:"Umair Khan",
    age:23
}
//spread operator
let copyObj = {...obj}
console.log(copyObj)



//any type [flexible different type of val can be  assigned]
let temp;
temp=5;
temp="uk";

//type any in function parameter
function typeAnyfunc(param:any){
    console.log("Hello "+param)
}

let alpha:string[] = ['a','b','c'];
alpha.forEach(val=>console.log(val))


//tuples
//A tuple is a typed array with a pre-defined length and types for each index.
let car:[name:string,model:string,year:number] = ["Toyota","XUV-300",2015]

let response:[number, string] = [200 , "Ok"];
   
//enum
//An enum (short for enumeration) is a way to define a set of named constants. 
//It gives friendly names to a group of related values (like roles, directions, status codes, etc).

//By default, the values of enums are numbers starting from 0:
enum Num {

    Pending,
    InProgress,
    Completed
}

console.log(Num.Pending) //default value of first elem in enum is 0 

enum Role{

    admin="ADMIN",
    user="USER",
    guest="GUEST"
}

//access elements of enum
console.log("Role is ",Role.guest);

//store value from enum into variable with enum name's type
let newUser:Role = Role.user;
console.log(newUser)


//in case of number value it default asssign the value like below

//we can define the enum in below both the ways

// enum defaultNum {
//     first=1,
//     second, //default 2
//     third   //default 3    
// }
const enum defaultNum {
    first=1,
    second, //default 2
    third   //default 3    
}

console.log(defaultNum.third);

//unknown is a safer alternative to any.
// It means “I don’t know what this value is yet, but I’ll check before using it.”

let value: unknown;

value = "Hello";
value = 42;
value = true;

// ❌ Can't directly use it without checking the type
// console.log(value.toUpperCase()); // Error

// ✅ Use type checking first
if (typeof value === "string") {
  console.log(value.toUpperCase()); // Works!
}


//never Type

//" never" represents a value that never occurs.
// It’s used when:
// A function never returns (e.g. throws an error or has an infinite loop)
// A variable is guaranteed to never hold a value

function loopForever(): never {
    while (true) {
      console.log("Running...");
    }
  }
  
// loopForever();


//throw error example
  function throwError(message:string):never{

    throw new Error(`Error : ${message}`);

  } 

//   throwError("Error Ocurred");


//void type
//type that doesnt return anything or returns undefined

function logMessage(message:string):void{

    console.log(message);

}

logMessage("Hello India")
