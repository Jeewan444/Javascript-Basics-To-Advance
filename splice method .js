/*
You are given an array of strings representing different people's full names.
Write a JavaScript function that uses the map method to transform this array into an array of objects. 
Each object should have two properties: firstName and lastName, representing the first and last names extracted from the full names.

Assume that each string contains exactly one space separating the first name and last name.
*/



/**
 * @param {string[]} names - Array of full names
 * @return {Object[]} - Array of objects with firstName and lastName properties
 */
function splitNames(names) {
    // Use the map method to transform the array of full names into an array of objects
    return names.map(function(name) {
        const [firstName, lastName] = name.split(' ');
        return { firstName, lastName };
    });
}

// Test case
const names = [
    'John Doe',
    'Jane Smith',
    'Sam Brown'
];

const result = splitNames(names);
console.log(result); 
// Output: [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jane', lastName: 'Smith' },
//   { firstName: 'Sam', lastName: 'Brown' }
// ]



//uses of the splice method—removing, adding, and replacing elements
let fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

// 1. Removing Elements
let removed = fruits.splice(1, 2);  

console.log('After Removing Elements:');
console.log(fruits);  
console.log('Removed Elements:', removed);  

// 2. Adding Elements
fruits.splice(1, 0, 'Mango', 'Pineapple');  

console.log('After Adding Elements:');
console.log(fruits);  

// 3. Replacing Elements
fruits.splice(2, 1, 'Orange', 'Grapes');  

console.log('After Replacing Elements:');
console.log(fruits);  

