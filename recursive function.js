// a function that calls itself is a recursive function 


//factorial without recursion

function factorialwithoutrecursion(num){
    
    let answer = 1;
    if(num === 0){
        return 1;
    }else{
        for(let i=1; i<=num; i++){
            answer *= i;    
    }
    return answer;
    }
}
console.log(factorialwithoutrecursion(7));

// factorial 

function factorial(num){
    if(num ==0){
        return 1;
    }else if(num <0){
        return undefined;
    }else{
        return num * factorial(num -1);  // recursing/ calling the same  the same function 
    }
}
let result = factorial(7);
console.log(result);