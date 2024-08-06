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

// You have a list of user objects. Each user object contains the user's name and age. Write a JavaScript function
//that uses the map method to create a new array of strings
//where each string contains a user's name and their age in a formatted string. The format should be "Name is Age years old"

const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

const result = formatUserDescriptions(users);
console.log(result); 
// Output: ["Alice is 30 years old", "Bob is 25 years old", "Charlie is 35 years old"]


/**
 * @param {Object[]} users - Array of user objects
 * @param {string} users[].name - User's name
 * @param {number} users[].age - User's age
 * @return {string[]} - Array of formatted user descriptions
 */
function formatUserDescriptions(users) {
    // Using the map method to create a new array with formatted strings
    return users.map(function(user) {
        return `${user.name} is ${user.age} years old`;
    });
}

// Test case
const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

const result = formatUserDescriptions(users);
console.log(result); 
// Output: ["Alice is 30 years old", "Bob is 25 years old", "Charlie is 35 years old"]
