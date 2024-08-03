//normal function 

function sum(a,b){
    return a+b;
};
console.log(sum(5,6));

// arrow function
const sum1 = (a,b) =>{
    console.log( a+b);
};

sum1(5,6);

//arrow function in string 

const arowstring = () => {
    console.log("hello world");
}
arowstring();