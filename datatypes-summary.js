// primitive data types   call by value

// 7 types; string , number , boolean , null, undefined , symbol , bigInt , 

const numberValue  = 123;
const stringvalue = "Jeewan"

const isLoggedIn = false;
let email; //undefined
let password = null;

const value1 = Symbol('123');
const value2 = Symbol('123');
const bigIntNumber = 1234141321532516731n;

console.log(value1===value2);

// is js dynamically types or statically typed? 


// Non-primitive data types / reference data types      call by reference 

//array, objects , functions 
const arrayOfDoggyDon = ["jeewan" , "kaluwa" , "beta", "koticha"];
let obj = {
    Name : "jeewan" ,
    age : 23
}

function myFunction (){
    console.log("hello world");
}

console.log(typeof myFunction);
console.log(typeof null);
console.log(typeof arrayOfDoggyDon);

