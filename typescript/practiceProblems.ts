
//write a factorial function for a number with proper annotation
function fact(n:number):number{

    if(n<=1){
        return 1;
    }

    //recursive approach 
    // return n*fact(n-1);

    let ans=1;
    while(n>1){
        ans*=n;
        n-=1;
    }

    return ans;
}

console.log("factorial is ",fact(5))



//create a function that takes an object and return in well formatted way
interface Person{
    name:string,
    age:number
}

function formatted(data:Person){

    return `Name is : ${data.name} \nAge is ${data.age}`

}

let person:Person={
    name:"Joe Root",
    age:33
}

console.log(formatted(person));



//calculate the total price of the items from an array of objects
interface Order{
    quantity:number,
    price:number
}



let list:Order[]=[
{quantity:8,price:699},
{quantity:3,price:560}]

function calculateTotal(list:Order[]):number{

 return list.reduce((total, item)=>total + item.quantity * item.price,0);

}

console.log("Total of Order is ",calculateTotal(list));



//Define a union type for the vehicle that can be either car or bike with different properties
//write a function to log details based on vehicle type

type CarData = {
    type:"car",
    make:string,
    model:string,
    year:number
}

type BikeData = {
    type:"bike",
    branch:string,
    cc:number
}


type VehicleData = BikeData | CarData;

function printDetails(vehicle:VehicleData){

    if(vehicle.type === "car"){
        console.log(`Vehicle : ${vehicle.type} \n Make : ${vehicle.make} \n Model :${vehicle.model} \n Year : ${vehicle.year}`);
    }
    else if(vehicle.type === "bike")
    {
        console.log(`Vehicle : ${vehicle.type} \n Branch : ${vehicle.branch} \n CC :${vehicle.cc} `);
    }

}


let bikeDetails:BikeData={
    type:"bike",
    branch:"Mumbai",
    cc:9896
}


let carDetails:CarData={
    type:"car",
    make:"India",
    model:"BMW",
    year:2005
}


printDetails(bikeDetails);
printDetails(carDetails);
