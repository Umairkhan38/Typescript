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



//Type Inference
// Type inference is a feature in TypeScript where the compiler automatically determines 
//the type of a variable based on the value assigned to it, without the need for explicit type annotations.

//example
let count = 10; 


//Type Assertion
// Type assertion is a mechanism in TypeScript that allows developers to explicitly specify a type for a value when they have more knowledge about the value’s type than the compiler does. It does not perform type checking or data conversion; it simply tells the compiler to treat the value as a specified type.

let val: any = "Hello";
let strLength: number = (val as string).length;

//union type
//union type  type allows a variable to hold more than one possible type 
//that its data type can be any of the provided

let unionVal: string | number ; //can be assigned string or number 

unionVal=898965
//Type Narrowing
//Type narrowing is the process where TypeScript reduces a union 
//type to a more specific type based on runtime checks (like typeof, instanceof, or checking properties).

function printLength(value: string | number) {
  if (typeof value === "string") {
    // TypeScript knows value is string here
    console.log("Length:", value.length);
  } else {
    // TypeScript knows value is number here
    console.log("Fixed:", value.toFixed(2));    //to fixed defined no of digits after decimal 
  }
}

printLength(unionVal)


//Inerface
//An interface in TypeScript is like a contract or blueprint for an object.
// It defines what properties and methods an object should have — but not how they work.

interface Person{

  name:string,
  //function
  sayHii():void,
  //property using function
  // sayHii : ()=> void 
}

//inhertis all the properties from person
interface Account extends Person{
  branch : string,
  balance:number,
  // "?" indicates that email is optional its string if defined in object else undefined
  email? :string 
}




function sayHii(){
  console.log("Hii!")
}


let person:Account={
  name:"Umair Khan",
  //defining  function 
  sayHii(){
console.log("sayHii")
  },
  branch:"Mumbai",
  balance:56000
  //defining funtion property 
  // sayHii
}

person.sayHii();

// interface with function type
interface MathOp{
  //defining a function type with parameter type
  (a : number, b : number) : number
}


const addRes:MathOp = (x,y)=>x+y;
console.log("interface with function type ", addRes(5,6));




//A Type Alias in TypeScript is a feature that allows you to create a custom name (alias) for a type.
// It can be used to name primitive types, object types, union types, function types, etc.,
//  to make your code more readable, reusable, and manageable.

//type using numnber
type USERID = number;
let id : USERID = 895;

//union " | "" Type
type Id = string | number;

let orderId:Id=65566;
let itemId :string ="ELEC-660";



//type using object
type School = {
  address:string,
   fees:number 
}

// we can inherit the one type properties in to other type properties using Intersection '&' 
type student= School &{
  name:"Uk",
  address:"Mumbai",
  fees:8952
} 


type status = "active" | "Inactive" | "pending"
let userStatus :status = "Inactive";


type Tree = {
  value:string,
  children : Tree[]
}

let defineTree={
  value:"GrandFather",
  children:[{
    value:"Father",
    children:[{
      value:"Son"
    }]
  }]
}


// defining a function type with parameter type for Alias Type
type addNum = {(num1:number, num2:number):number}

let addNumRes:addNum =(x,y)=>x+y
console.log("Function type with parameter type for Alias Type ",addNumRes(96,35));

