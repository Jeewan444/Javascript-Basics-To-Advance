// Write a JavaScript function that takes an array of numbers and returns the sum of all positive numbers in the array. Use the reduce method.

// Function to calculate the sum of positive numbers
function sumOfPositiveNumbers(arr) {
    return arr.reduce(function(sum, num) {
        // Only adding the number if it's positive
        return num > 0 ? sum + num : sum;
    }, 0); // Initializing sum to 0
}

// Example 
const numbers = [-3, 7, 2, -5, 10, -1, 8];
const result = sumOfPositiveNumbers(numbers);

console.log(result); // Output: 27

