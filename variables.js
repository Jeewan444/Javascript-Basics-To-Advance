const accountId = 123344;
let accountEmail = "jeewan@gmail.com";
var accountPass = 1234;
let accountCity = " Nepal";
let accountState;

/*
in javascript we mostly use let and const only other than that we dont use any var keywords.
in javascript we dont use use var basically baecause of issue in block scope and functional scope .
*/

accountEmail="samir@gmail.com";
accountPass="4444";
accountCity="kathmandu"

console.log("accountId");
console.table([accountEmail,accountPass,accountCity,accountState]);


// question get user number , and check if it is the multiple of 5 or not 

//solution 


let number = prompt(" Enter the number ");
if(number%5===0){
    console.log("it is the multiple of 5");
}else{
    console.log("it is not the multiple of 5");
}



let grade = prompt("Enter the marks :");
if(grade >=90 && grade<=100){
    console.log("A");
}else if( grade >=70 && grade<=89){
    console.log("B");
}else if( grade >=60 && grade<=69){
    console.log("C");
}else if( grade >=50 && grade<=59){
    console.log("D");
}else if( grade >=0 && grade<=49){
    console.log("E");
}
