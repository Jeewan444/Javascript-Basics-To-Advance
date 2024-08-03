/* create a functon using function that takes string as an argumnet and 
returns the number of vowels in the string */

function countString(str){
    let count = 0;
    if(str === "a" || str === "e" || str === "o" || str === "i" || str === "u" ){
        count++;
    }
    return count;
}
console.log(countString("hello"));

/* create a functon using function that takes string as an argumnet and 
returns the number of vowels in the string */
function countString(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === "a" || str[i] === "e" || str[i] === "o" || str[i] === "i" || str[i] === "u"){
            count++;
        }
            return count;
    }
}
 console.log(countString("hello"));
