//functions and parameters 

// function addTwoNumbers(x,y){
//     let result = x + y;
//     console.log(result);

// };
// addTwoNumbers(44,34);
// function addTwoNumbers(x,y){
//     let result = x + y;
//     return result;

// };
// console.log(addTwoNumbers(44,34));
// function addTwoNumbers(x,y){
//     let result = x+y;
//     console.log(result);
    

// };
// addTwoNumbers(44,34);
// function addTwoNumbers(x,y){
//      return x+y;

    

// };
// console.log(addTwoNumbers(44,34));
function loginUserName(username){
    if(username===undefined){
        console.log(" samir just logged in ");
        return
    }
    return ` ${username} just logged in `;
}

 console.log(loginUserName())


//Write a function named greet that takes a single parameter name and returns a greeting message that says "Hello, [name]!"
function greet(name) {
    return "Hello, " + name + "!";
}

 
console.log(greet("Alice")); 
console.log(greet("Bob"));   


