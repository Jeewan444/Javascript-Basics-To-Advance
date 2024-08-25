//To change the text content of an HTML element using JavaScript and the DOM, we can use the textContent property of the element

/*<!DOCTYPE html>
<html>
<head>
    <title>Change Text Content</title>
</head>
<body>
    <p id="myParagraph">This is the original text.</p>
    <button onclick="changeText()">Change Text</button>

    <script src="script.js"></script>
</body>
</html>
*/


/*function changeText() {
    // Get the HTML element by its ID
    let paragraph = document.getElementById("myParagraph");

    // Change the text content of the element
    paragraph.textContent = "This is the new text.";
}
*/


/*You are given an array of objects representing users, each with a name and age property. Write a function in JavaScript that performs the following data manipulation tasks:

Filter: Find all users who are 18 years old or older.
Sort: Sort the filtered users by age in ascending order.
Map: Create an array of strings where each string is in the format "Name: [name], Age: [age]".*/

/*

const users = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 16 },
    { name: "David", age: 19 },
    { name: "Eve", age: 25 }
];

*/

// Expected output:
// [
//     "Name: David, Age: 19",
//     "Name: Bob, Age: 22",
//     "Name: Eve, Age: 25"
// ]


const users = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 16 },
    { name: "David", age: 19 },
    { name: "Eve", age: 25 }
];

const manipulateUsers = (users) => {
    return users
        .filter(user => user.age >= 18) // Filter users 18 years or older
        .sort((a, b) => a.age - b.age) // Sort users by age in ascending order
        .map(user => `Name: ${user.name}, Age: ${user.age}`); // Map to string format
};

console.log(manipulateUsers(users));

// most used dom techniques 

// 1. Change the Text of an Element
function changeText() {
    document.getElementById('myParagraph').textContent = 'New Text';
}

// 2. Add a New Element to the DOM
function addElement() {
    var ul = document.getElementById('myList');
    var li = document.createElement('li');
    li.textContent = 'New Item';
    ul.appendChild(li);
}

// 3. Remove an Element from the DOM
function removeElement() {
    var element = document.getElementById('myParagraph');
    element.parentNode.removeChild(element);
}

// 4. Toggle a Class on an Element
function toggleClass() {
    var element = document.getElementById('myParagraph');
    element.classList.toggle('highlight');
}

// 5. Change the Attribute of an Element
function changeAttribute() {
    var img = document.getElementById('myImage');
    img.setAttribute('src', 'new-image.jpg');
    img.setAttribute('alt', 'New Image');
}

// 6. Get the Value of an Input Field
function getValue() {
    var input = document.getElementById('myInput');
    var value = input.value;
    document.getElementById('display').textContent = 'Input Value: ' + value;
}

// 7. Listen for an Event and Respond
document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('message').textContent = 'Button was clicked!';
});

