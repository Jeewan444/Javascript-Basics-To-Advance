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

// How can you write an arrow function in JavaScript
//that takes an array of strings and returns an object where the keys are the strings and the values are the lengths of those strings?

const getStringLengths = (strings) => {
  return strings.reduce((acc, str) => {
    acc[str] = str.length;
    return acc;
  }, {});
};


const stringsArray = ["apple", "banana", "cherry"];
const lengthsObject = getStringLengths(stringsArray);

console.log(lengthsObject); 

