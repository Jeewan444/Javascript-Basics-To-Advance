/* problem no 2665

Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 

Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
Example 2:

Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
Output: [1,2,1,0,0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
*/

//solution
var createCounter = function(init) {
    let currentValue = init;

    return {
        increment: function() {
            currentValue += 1;
            return currentValue;
        },
        decrement: function() {
            currentValue -= 1;
            return currentValue;
        },
        reset: function() {
            currentValue = init;
            return currentValue;
        }
    };
};


const counter = createCounter(2);
console.log(counter.increment()); 
console.log(counter.reset());     
console.log(counter.decrement()); 

/*
Create a function that toggles the visibility of a paragraph on a webpage. When the user clicks a button, the paragraph should either be shown or hidden. If the paragraph is visible and the user clicks the button, it should be hidden. If the paragraph is hidden and the user clicks the button, it should be shown.

Example:

Initially, the paragraph is visible. When the user clicks the button, the paragraph becomes hidden, and the button text changes to "Show".
When the user clicks the button again, the paragraph becomes visible, and the button text changes back to "Hide".
*/

//solution

document.getElementById('toggleButton').addEventListener('click', function() {
    const paragraph = document.getElementById('myParagraph');
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
        this.textContent = 'Hide';
    } else {
        paragraph.style.display = 'none';
        this.textContent = 'Show';
    }
});

