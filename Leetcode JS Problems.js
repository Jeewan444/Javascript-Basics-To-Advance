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
-----------------------------------------------------------------------------------------------------------------------
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
-----------------------------------------------------------------------------------------------------------------------

/* There is a strange printer with the following two special properties:

The printer can only print a sequence of the same character each time.
At each turn, the printer can print new characters starting from and ending at any place and will cover the original existing characters.
Given a string s, return the minimum number of turns the printer needed to print it.

*/

/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // Base case: A single character substring needs 1 print
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    // Consider substrings of increasing lengths
    for (let length = 2; length <= n; length++) {
        for (let i = 0; i <= n - length; i++) {
            let j = i + length - 1;
            dp[i][j] = dp[i][j - 1] + 1;

            for (let k = i; k < j; k++) {
                if (s[k] === s[j]) {
                    dp[i][j] = Math.min(dp[i][j], dp[i][k] + (k + 1 <= j - 1 ? dp[k + 1][j - 1] : 0));
                }
            }
        }
    }

    return dp[0][n - 1];
};

-----------------------------------------------------------------------------------------------------------------------
/*the complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
Given an integer num, return its complement.
*/

var findComplement = function(num) {
    let mask = 1;
    while (mask <= num) {
        mask <<= 1;
    }
    return mask - 1 - num;
};


-----------------------------------------------------------------------------------------------------------------------

//problem number 592 

function fractionAddition(expression) {
    let fractions = expression.match(/[+-]?\d+\/\d+/g);
    let numerator = 0;
    let denominator = 1;

    for (let fraction of fractions) {
        let [num, denom] = fraction.split('/').map(Number);
        numerator = numerator * denom + num * denominator;
        denominator *= denom;

        let gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
        let gcdValue = gcd(Math.abs(numerator), denominator);

        numerator /= gcdValue;
        denominator /= gcdValue;
    }

    return numerator + '/' + denominator;
}

//JavaScript code to find the Nth Fibonacci number:
function findNthFibonacci(N) {
    // Edge cases for N = 1 or 2
    if (N === 1 || N === 2) {
        return 1;
    }

    // Fibonacci logic
    let a = 1, b = 1;
    let fib = 1;
    for (let i = 3; i <= N; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib;
}

// Sample input
const N = 8;
console.log(findNthFibonacci(N)); // Output: 21


-----------------------------------------------------------------------------------------------------------------------

//Problem: Create a Dynamic To-Do List
//Question:

/*  You are tasked with creating a simple To-Do list using HTML and JavaScript (DOM manipulation). The list should have the following functionalities:

Add a Task: There should be an input field where users can type a task and a button to add the task to the list.
Delete a Task: Each task added should have a delete button next to it, allowing users to remove the task from the list.
Mark as Completed: When a task is clicked, it should be marked as completed by adding a line-through style.
Implement this functionality using only JavaScript to manipulate the DOM.
*/

// Get references to the input field, add button, and the list
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        // Create a new list item
        const li = document.createElement('li');

        // Create a span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Add event listener to toggle completion
        taskSpan.addEventListener('click', function() {
            taskSpan.classList.toggle('completed');
        });

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        // Add event listener to delete the task
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Append the task and delete button to the list item
        li.appendChild(taskSpan);
        li.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
}

// Adding  event listener to the add button
addButton.addEventListener('click', addTask);

// Optionally, allow pressing 'Enter' to add the task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});


-----------------------------------------------------------------------------------------------------------------------

// 1514. Path with Maximum Probability

/* You are given an undirected weighted graph of n nodes (0-indexed), represented by an edge list where edges[i] = [a, b] is an undirected edge connecting the nodes a and b with a probability of success of traversing that edge succProb[i].

Given two nodes start and end, find the path with the maximum probability of success to go from start to end and return its success probability.

If there is no path from start to end, return 0. Your answer will be accepted if it differs from the correct answer by at most 1e-5.
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start, end) {
    // Create a graph as an adjacency list with probability as weights
    const graph = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i];
        const prob = succProb[i];
        graph[u].push([v, prob]);
        graph[v].push([u, prob]);
    }

    // Use a max heap (priority queue) to store the maximum probabilities
    const maxHeap = new MaxPriorityQueue({ priority: x => x[1] });
    const probabilities = new Array(n).fill(0);
    probabilities[start] = 1; // Start node has a probability of 1

    maxHeap.enqueue([start, 1]);

    while (!maxHeap.isEmpty()) {
        const [currentNode, currentProb] = maxHeap.dequeue().element;

        if (currentNode === end) {
            return currentProb;
        }

        for (const [neighbor, prob] of graph[currentNode]) {
            const newProb = currentProb * prob;
            if (newProb > probabilities[neighbor]) {
                probabilities[neighbor] = newProb;
                maxHeap.enqueue([neighbor, newProb]);
            }
        }
    }

    return 0;
};

-----------------------------------------------------------------------------------------------------------------------

/* you are given a string s consisting of lowercase English letters, and an integer k.

First, convert s into an integer by replacing each letter with its position in the alphabet (i.e., replace 'a' with 1, 'b' with 2, ..., 'z' with 26). Then, transform the integer by replacing it with the sum of its digits. Repeat the transform operation k times in total.

For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:



Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
Transform #2: 17 ➝ 1 + 7 ➝ 8


*/


var getLucky = function(s, k) {
    // Helper function to sum the digits of a number
    const transform = function(t) {
        let res = 0;
        while (t > 0) {
            res += t % 10;
            t = Math.floor(t / 10);
        }
        return res;
    };
    
    // Convert the string to the sum of its corresponding numeric values
    let res = 0;
    for (let ch of s) {
        let num = ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        if (num >= 10) {
            res += num % 10 + Math.floor(num / 10);
        } else {
            res += num;
        }
    }

    // Perform the transformation k-1 times
    while (--k > 0) {
        res = transform(res);
    }

    // Return the final result after k transformations
    return res;
};


-----------------------------------------------------------------------------------------------------------------------

/* Walking Robot Simulation

A robot on an infinite XY-plane starts at point (0, 0) facing north. The robot can receive a sequence of these three possible types of commands:

-2: Turn left 90 degrees.
-1: Turn right 90 degrees.
1 <= k <= 9: Move forward k units, one unit at a time.
Some of the grid squares are obstacles. The ith obstacle is at grid point obstacles[i] = (xi, yi). If the robot runs into an obstacle, then it will instead stay in its current location and move on to the next command.

Return the maximum Euclidean distance that the robot ever gets from the origin squared (i.e. if the distance is 5, return 25).

Note:

North means +Y direction.
East means +X direction.
South means -Y direction.
West means -X direction.
There can be obstacle in [0,0].
*/

var robotSim = function(commands, obstacles) {
    let obstacleSet = new Set(obstacles.map(obstacle => obstacle[0] + "," + obstacle[1]));
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];  // North, East, South, West
    let x = 0, y = 0, direction = 0;
    let maxDistance = 0;

    for (let command of commands) {
        if (command === -1) {
            direction = (direction + 1) % 4;
        } else if (command === -2) {
            direction = (direction + 3) % 4;
        } else {
            for (let i = 0; i < command; i++) {
                let newX = x + directions[direction][0];
                let newY = y + directions[direction][1];
                if (!obstacleSet.has(newX + "," + newY)) {
                    x = newX;
                    y = newY;
                    maxDistance = Math.max(maxDistance, x * x + y * y);
                } else {
                    break;
                }
            }
        }
    }

    return maxDistance;
};

-----------------------------------------------------------------------------------------------------------------------

/* 3217 problem leetcode 

you are given an array of integers nums and the head of a linked list. Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.

 

Example 1:

Input: nums = [1,2,3], head = [1,2,3,4,5]

Output: [4,5]


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let max = -1;
    for( let num of nums ){
        max = num > max ? num : max;
    }

    let freq = new Array(max+1).fill(false);

    for(let num of nums)freq[num] = true;

    let temp = new ListNode();
    let current = temp;

    while(head != null ){
        if( head.val >= freq.length || freq[head.val] == false){
            current.next = head;
            current = current.next;
        }
        head = head.next;
    }

    current.next = null;
    return temp.next;
};

-----------------------------------------------------------------------------------------------------------------------

/* 

1367 Linked List In binary tree

Given a binary tree root and a linked list with head as the first node. 

Return True if all the elements in the linked list starting from the head correspond to some downward path connected in the binary tree otherwise return False.

In this context downward path means a path that starts at some node and goes downwards.

*/


var isSubPath = function(head, root) {
    return dfs(head, head, root);
};

var dfs = function(head, cur, root) {
    if (cur === null) return true;  // Successfully matched the list
    if (root === null) return false; // Reached the end of the tree without matching
    
    if (cur.val === root.val) {
        cur = cur.next;  // Move to the next list node if value matches
    } else if (head.val === root.val) {
        head = head.next; // Start new matching attempt if the value matches head of list
    } else {
        cur = head;  // Reset the matching pointer
    }
    
    // Recursively check left and right subtrees
    return dfs(head, cur, root.left) || dfs(head, cur, root.right);
};
-----------------------------------------------------------------------------------------------------------------------

/*
725 . split linked list parts
Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts.

The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.

The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.

Return an array of the k parts.

*/


 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let ans = new Array(k).fill(null);

    // Calculate total size of the linked list
    let size = 0;
    let current = head;
    while (current) {
        size++;
        current = current.next;
    }

    // Minimum size of each part
    let splitSize = Math.floor(size / k);
    let remainder = size % k; // Remaining nodes to distribute

    current = head;
    let prev = null;
    for (let i = 0; i < k; i++) {
        ans[i] = current;
        let currentSize = splitSize + (remainder > 0 ? 1 : 0);
        remainder--;

        // Traverse to the end of the current part
        for (let j = 0; j < currentSize; j++) {
            prev = current;
            current = current.next;
        }

        // Cut the list
        if (prev) prev.next = null;
    }

    return ans;
};

-----------------------------------------------------------------------------------------------------------
