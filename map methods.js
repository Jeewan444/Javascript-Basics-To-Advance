let arry = [2,3,4,5];

let newArr = arry.map((value) => {
    return value * 2;
})

document.write(newArr);


/* You have a list of user objects. Each user object contains the user's name and age. Write a JavaScript function 
that uses the map method to create a new array of strings where each 
string contains a user's name and their age in a formatted string. The format should be "Name is Age years old"*/

// example 

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
    // Use the map method to create a new array with formatted strings
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
