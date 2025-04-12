
//function with default parameter

function addNum(a:number, b:number = 6) : number{

    return a+b;    
}

console.log("sum is ",addNum(5,9))



//here name is an optional parameter
function intro(greet:string , name?:string ):void{
    let ans:string=name? `${greet} ${name}` : greet
    console.log(ans); 
}

intro("Hello","Umair Khan");


//Function overloading 
function getLength(value:string):number;
function getLength(value:any[]):number;

function getLength(value:any[] | string):number{
    return value.length;
}


console.log('Length is ',getLength("Khan"))
console.log('Length is ',getLength([6,9,55,6,5]))