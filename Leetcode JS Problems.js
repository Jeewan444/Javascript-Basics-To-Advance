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


 -----------------------------------------------------------------------------------------------------------------------

  // 2807 insert greatest common divisors in linked list 
  /*
  
  Given the head of a linked list head, in which each node contains an integer value.

Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

Return the linked list after insertion.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.
  
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
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    if (!head || !head.next) return head;

        const gcd = (a, b) => {
            while (b !== 0) {
                [a, b] = [b, a % b];
            }
            return a;
        };

        let node1 = head;
        while (node1.next) {
            let node2 = node1.next;
            let gcdValue = gcd(node1.val, node2.val);
            let gcdNode = new ListNode(gcdValue);
            node1.next = gcdNode;
            gcdNode.next = node2;
            node1 = node2;
        }

        return head;
};

-----------------------------------------------------------------------------------------------------------
 /**

2220 minimum bits fliped to covert number

A bit flip of a number x is choosing a bit in the binary representation of x and flipping it from either 0 to 1 or 1 to 0.

For example, for x = 7, the binary representation is 111 and we may choose any bit (including any leading zeros not shown) and flip it. We can flip the first bit from the right to get 110, flip the second bit from the right to get 101, flip the fifth bit from the right (a leading zero) to get 10111, etc.
Given two integers start and goal, return the minimum number of bit flips to convert start to goal.
 
 */
 
 
 
 
 
 
 /**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let flipCount = 0;
    let mask = 1;
    
    for (let i = 0; i < 32; i++) {
        const startBit = (start & mask) !== 0;
        const goalBit = (goal & mask) !== 0;
        
        if (startBit !== goalBit) {
            flipCount++;
        }
        
        mask <<= 1;
    }
    
    return flipCount;
};


-----------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------


// 1310 . XOR queries of subarray

 /*

 You are given an array arr of positive integers. You are also given the array queries where queries[i] = [lefti, righti].

For each query i compute the XOR of elements from lefti to righti (that is, arr[lefti] XOR arr[lefti + 1] XOR ... XOR arr[righti] ).

Return an array answer where answer[i] is the answer to the ith query.

 
 
 */


/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    const n = arr.length;
    const pre = new Array(n);
    pre[0] = arr[0];
    
    // Compute prefix XOR array
    for (let i = 1; i < n; i++) {
        pre[i] = pre[i - 1] ^ arr[i];
    }
    
    const res = [];
    
    // Answer each query
    for (const [left, right] of queries) {
        if (left === 0) {
            res.push(pre[right]);
        } else {
            res.push(pre[right] ^ pre[left - 1]);
        }
    }
    
    return res;
};

 
 -----------------------------------------------------------------------------------------------------------
 
 -----------------------------------------------------------------------------------------------------------


  // 2419 .

//  Longest Sub-array with Maximum Bitwise AND   //

//   You are given an integer array nums of size n.

// Consider a non-empty subarray from nums that has the maximum possible bitwise AND.

// In other words, let k be the maximum value of the bitwise AND of any subarray of nums. Then, only subarrays with a bitwise AND equal to k should be considered.
// Return the length of the longest such subarray.

// The bitwise AND of an array is the bitwise AND of all the numbers in it.

// A subarray is a contiguous sequence of elements within an array.




// solution

  var longestSubarray = function(nums) {
    let maxBitwiseAnd = Math.max(...nums);
    let maxi = 1;
    let count = 0;
    let i = 0;
    
    while (i < nums.length) {
        if (nums[i] === maxBitwiseAnd) {
            while (i < nums.length && nums[i] === maxBitwiseAnd) {
                count++;
                i++;
            }
            maxi = Math.max(maxi, count);
            count = 0;
        } else {
            i++;
        }
    }
    
    return maxi;
};

 -----------------------------------------------------------------------------------------------------------
 
 -----------------------------------------------------------------------------------------------------------

  // 1371 . find the longest substring in the containing vowels in each count .

//Given the string s, return the size of the longest substring containing each vowel an even number of times. That is, 'a', 'e', 'i', 'o', and 'u' must appear an even number of times.





  var findTheLongestSubstring = function(s) {
    let n = s.length;
    let mask = 0;
    let maxLength = 0;
    let m = new Map();
    m.set(0, -1);
    
    for (let i = 0; i < n; i++) {
        if (s[i] === 'a') mask ^= (1 << 0);
        else if (s[i] === 'e') mask ^= (1 << 1);
        else if (s[i] === 'i') mask ^= (1 << 2);
        else if (s[i] === 'o') mask ^= (1 << 3);
        else if (s[i] === 'u') mask ^= (1 << 4);
        
        if (m.has(mask)) {
            maxLength = Math.max(maxLength, i - m.get(mask));
        } else {
            m.set(mask, i);
        }
    }
    
    return maxLength;
};


-----------------------------------------------------------------------------------------------------------
 
 -----------------------------------------------------------------------------------------------------------


//539 . minimum time difference 

//  Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.
 

// Example 1:

// Input: timePoints = ["23:59","00:00"]
// Output: 1
// Example 2:

// Input: timePoints = ["00:00","23:59","00:00"]
// Output: 0







 /**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    // Convert times to minutes
    let minutes = timePoints.map(time => {
        let [h, m] = time.split(':').map(Number);
        return h * 60 + m;
    });

    // Sort times in ascending order
    minutes.sort((a, b) => a - b);

    // Find minimum difference across adjacent elements
    let minDiff = Infinity;
    for (let i = 0; i < minutes.length - 1; i++) {
        minDiff = Math.min(minDiff, minutes[i + 1] - minutes[i]);
    }

    // Consider the circular difference between last and first element
    minDiff = Math.min(minDiff, 24 * 60 - minutes[minutes.length - 1] + minutes[0]);

    return minDiff;
};

-----------------------------------------------------------------------------------------------------------
 
 -----------------------------------------------------------------------------------------------------------


// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.






/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */var uncommonFromSentences = function(s1, s2) {
    // Create a new map to store the frequency of each word.
    let m = new Map()
    
    // Split the first sentence 's1' into an array of words.
    s1 = s1.split(' ')

    // Iterate through each word in the first sentence (s1).
    for (let i = 0; i < s1.length; i++) {
        // If the word already exists in the map, update its frequency (increase count by 1).
        if (m.has(s1[i])) {
            // m.get(s1[i]) returns the current count of the word, and we add 1 to it.
            m.set(s1[i], m.get(s1[i]) + 1)
        } else {
            // If the word doesn't exist in the map, add it with an initial frequency of 1.
            m.set(s1[i], 1)
        }
    }

    // Split the second sentence 's2' into an array of words.
    s2 = s2.split(' ')

    // Iterate through each word in the second sentence (s2).
    for (let i = 0; i < s2.length; i++) {
        // If the word already exists in the map (from s1 or s2), update its frequency.
        if (m.has(s2[i])) {
            // m.get(s2[i]) returns the current count of the word, and we add 1 to it.
            m.set(s2[i], m.get(s2[i]) + 1)
        } else {
            // If the word doesn't exist in the map, add it with an initial frequency of 1.
            m.set(s2[i], 1)
        }
    }

    // Create an empty array to store the result (uncommon words).
    let result = []

    // Iterate through the map to check the frequency of each word.
    for (let [key, val] of m) {
        // If the frequency of the word is exactly 1, it means the word is uncommon.
        if (val === 1) {
            // Add the uncommon word to the result array.
            result.push(key)
        }
    }

    // Return the array of uncommon words.
    return result
};

-----------------------------------------------------------------------------------------------------------
 
 -----------------------------------------------------------------------------------------------------------

// 179 largest number 

 
//  Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

 
 /**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const stringNums = nums.map(num => num.toString());
    const compare = (a, b) => {
        const concateStrs = a + b;
        const concateStrs2 = b + a;
        return concateStrs > concateStrs2 ? -1 : (concateStrs === concateStrs2 ? 0 : 1);
    };
    stringNums.sort(compare);
    if (stringNums[0] === "0") {
        return "0";
    }
    return stringNums.join('');
};

-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------

// 241 . different ways to add parenthesis.

 
// Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. You may return the answer in any order.

// The test cases are generated such that the output values fit in a 32-bit integer and the number of different results does not exceed 104.

 

// Example 1:

// Input: expression = "2-1-1"
// Output: [0,2]
// Explanation:
// ((2-1)-1) = 0 
// (2-(1-1)) = 2



var diffWaysToCompute = function(expression) {
    const memo = new Map();

    // Helper function to recursively solve sub-expressions
    function solve(expr) {
        // If the result for the current expression is already computed, return it
        if (memo.has(expr)) return memo.get(expr);
        
        const results = [];
        
        // Traverse through the expression
        for (let i = 0; i < expr.length; i++) {
            const char = expr[i];
            
            // If the current character is an operator, split the expression
            if (char === '+' || char === '-' || char === '*') {
                // Divide into left and right sub-expressions
                const left = solve(expr.slice(0, i));
                const right = solve(expr.slice(i + 1));
                
                // Combine results from both sides based on the operator
                for (const l of left) {
                    for (const r of right) {
                        if (char === '+') {
                            results.push(l + r);
                        } else if (char === '-') {
                            results.push(l - r);
                        } else if (char === '*') {
                            results.push(l * r);
                        }
                    }
                }
            }
        }
        
        // If the expression is a number, convert it to a number and return it
        if (results.length === 0) results.push(parseInt(expr));
        
        // Memoize the result for the current expression
        memo.set(expr, results);
        return results;
    }

    return solve(expression);
};


-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------

// 214. shortest palindrome

 
//  You are given a string s. You can convert s to a 
// palindrome
//  by adding characters in front of it.

// Return the shortest palindrome you can find by performing this transformation.

 

// Example 1:

// Input: s = "aacecaaa"
// Output: "aaacecaaa"
// Example 2:

// Input: s = "abcd"
// Output: "dcbabcd"




 var shortestPalindrome = function(s) {
    if (s.length === 0) return s;

    // Combine string `s` with its reverse
    let rev = s.split('').reverse().join('');
    let combined = s + '#' + rev;

    // KMP failure table (LPS - longest prefix that is also suffix)
    let lps = new Array(combined.length).fill(0);
    for (let i = 1, len = 0; i < combined.length;) {
        if (combined[i] === combined[len]) {
            lps[i++] = ++len;
        } else {
            if (len > 0) {
                len = lps[len - 1];
            } else {
                lps[i++] = 0;
            }
        }
    }

    // Longest palindromic prefix's length
    let longestPrefixLength = lps[combined.length - 1];

    // Add the non-palindromic part (the suffix that doesn't form a palindrome)
    let nonPalindromicSuffix = s.substring(longestPrefixLength).split('').reverse().join('');
    
    return nonPalindromicSuffix + s;
};

-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------

//386. lexicographical numbers

//  Given an integer n, return all the numbers in the range [1, n] sorted in lexicographical order.

// You must write an algorithm that runs in O(n) time and uses O(1) extra space. 

 

// Example 1:

// Input: n = 13
// Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]
// Example 2:

// Input: n = 2
// Output: [1,2]



var lexicalOrder = function(n) {
    let res = [];
    let num = 1;
    for (let i = 0; i < n; i++) {
        res.push(num);
        if (num * 10 <= n) {
            num *= 10;  // Go deeper
        } else {
            while (num % 10 === 9 || num >= n) {
                num = Math.floor(num / 10);  // Go back up
            }
            num++;  // Move to the next number
        }
    }
    return res;
};


-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------

//440. k-th smallest in lexicographical order
 
 // Given two integers n and k, return the kth lexicographically smallest integer in the range [1, n].

 

// Example 1:

// Input: n = 13, k = 2
// Output: 10
// Explanation: The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.
// Example 2:

// Input: n = 1, k = 1
// Output: 1


 var findKthNumber = function(n, k) {
    const getReqNum = (a, b, n) => {
        let gap = 0;
        while (a <= n) {
            gap += Math.min(n + 1, b) - a;
            a *= 10;
            b *= 10;
        }
        return gap;
    };

    let num = 1; 
    let i = 1;   

    while (i < k) {
        let req = getReqNum(num, num + 1, n);  
        if (i + req <= k) {
            i += req;
            num++;
        } else {
            i++;
            num *= 10;
        }
    }

    return num;  
};


-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------

//2707. extra characters in a string 

 
// You are given a 0-indexed string s and a dictionary of words dictionary. You have to break s into one or more non-overlapping substrings such that each substring is present in dictionary. There may be some extra characters in s which are not present in any of the substrings.

// Return the minimum number of extra characters left over if you break up s optimally.

 

// Example 1:

// Input: s = "leetscode", dictionary = ["leet","code","leetcode"]
// Output: 1
// Explanation: We can break s in two substrings: "leet" from index 0 to 3 and "code" from index 5 to 8. There is only 1 unused character (at index 4), so we return 1.

 
 var minExtraChar = function(s, dictionary) {
    const n = s.length;
    const dictSet = new Set(dictionary);
    const dp = Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        dp[i] = dp[i + 1] + 1; // Worst case: add one character
        for (let j = i; j < n; j++) {
            const substring = s.slice(i, j + 1);
            if (dictSet.has(substring)) {
                dp[i] = Math.min(dp[i], dp[j + 1]);
            }
        }
    }
    return dp[0];
};

-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------


 //3034


 //solution

 class Solution {
    public int longestCommonPrefix(int[] arr1, int[] arr2) {
        HashMap<Integer, Integer> prefix = new HashMap<>();
        
        // Store all prefixes of the first array
        for (int val : arr1) {
            int num = val;
            while (num > 0) {
                prefix.put(num, prefix.getOrDefault(num, 0) + 1);
                num /= 10;
            }
        }

        // Variable to track the maximum length
        int mx = Integer.MIN_VALUE;

        // Instead of creating another map, check the prefix at the moment
        for (int val : arr2) {
            int num = val;
            // Count the number of digits in num
            int len = (int) Math.log10(num) + 1;

            // Generate all prefixes again
            while (num > 0) {
                // If prefix found, break
                if (prefix.containsKey(num)) {
                    break;
                }
                num /= 10;
                // Decrease digit count as we decrease prefix
                len--;
            }

            mx = Math.max(mx, len);
        }

        return mx;
    }
}


         
-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------

//2416. 


 //solution

 class Node {
    int count = 0;
    Node[] list = new Node[26];

    public boolean containKey(char ch) {
        return list[ch - 'a'] != null;
    }

    public Node get(char ch) {
        return list[ch - 'a'];
    }

    public void put(char ch, Node new_node) {
        list[ch - 'a'] = new_node;
    }

    public void inc(char ch) {
        list[ch - 'a'].count++;
    }

    public int retCount(char ch) {
        return list[ch - 'a'].count;
    }
}

class Solution {
    private Node root;

    public Solution() {
        root = new Node();
    }

    public void insert(String word) {
        Node node = root;
        for (char ch : word.toCharArray()) {
            if (!node.containKey(ch)) {
                node.put(ch, new Node());
            }
            node.inc(ch);
            node = node.get(ch);
        }
    }

    public int search(String word) {
        Node node = root;
        int preCount = 0;
        for (char ch : word.toCharArray()) {
            preCount += node.retCount(ch);
            node = node.get(ch);
        }
        return preCount;
    }

    public int[] sumPrefixScores(String[] words) {
        // This problem can be solved using the trie data structure
        for (String word : words) {
            insert(word);
        }
        int n = words.length;
        int[] res = new int[n];
        for (int i = 0; i < n; i++) {
            res[i] = search(words[i]);
        }
        return res;
    }
}


-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------

//729.mycalendar


 class MyCalendar {
    TreeMap<Integer, Integer> calcy;
    public MyCalendar() {
    calcy = new TreeMap();

    }
    
    public boolean book(int start, int end) {
    Integer prevBook = calcy.floorKey(start);
    Integer nextBook = calcy.ceilingKey(start);
    if((prevBook==null || calcy.get(prevBook)<=start) && (nextBook==null || end<=nextBook)) 
    { 
    calcy.put(start, end);
    return true;
    }
    return false;
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * MyCalendar obj = new MyCalendar();
 * boolean param_1 = obj.book(start,end);
 */



-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------


731. my calendar ii

 class Event
{
  int start;
  int end;
  public Event(int start, int end)
  {
    this.start = start;
    this.end = end;
  }  
}

class MyCalendarTwo {
    List<Event> overLapBookings;
    List<Event> bookings;

    public MyCalendarTwo() {
        overLapBookings = new ArrayList<>();
        bookings = new ArrayList<>();
    }
    
    public boolean book(int start, int end) {
        
    for(Event e : overLapBookings)
    {
      if(isOverlap(e, start, end))
      return false;  
    } 

    for(Event e : bookings)
    {
      if(isOverlap(e, start, end))
      {
        overLapBookings.add(getOverlapEvent(e, start, end));
      }    
    }  
       bookings.add(new Event(start, end));

       return true; 
    }

    public boolean isOverlap(Event e, int start, int end)
    {
      return Math.max(e.start, start)<Math.min(e.end, end); 
    }

    public Event getOverlapEvent(Event e, int start, int end)
    {
      return new Event(Math.max(e.start, start), Math.min(e.end, end));  
    }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * MyCalendarTwo obj = new MyCalendarTwo();
 * boolean param_1 = obj.book(start,end);
 */

-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------

//1381 .

class CustomStack {
    int [] stack;
    int top = -1;

    public CustomStack(int maxSize) {
        this.stack = new int [maxSize];
    }
    
    public void push(int x) {
        if (top < this.stack.length - 1) {
            top ++;
            this.stack[top] = x;
        }
    }
    
    public int pop() {
        if (top != -1) {
            return this.stack[top --];
        }
        return -1;
    }
    
    public void increment(int k, int val) {
        for (int i = 0; i < Math.min(k, top + 1); i ++) {
            this.stack[i] += val;
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * CustomStack obj = new CustomStack(maxSize);
 * obj.push(x);
 * int param_2 = obj.pop();
 * obj.increment(k,val);
 */


-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------

//1497.
 class Solution {
    public boolean canArrange(int[] arr, int k) {
        int [] freq = new int[k];
        for(int num: arr){
            int rem = num % k;
            if(rem < 0){
                rem = rem + k;
            }
            freq[rem]++;
        }
        if(freq[0] % 2 != 0){
            return false;
        }
        for(int i = 1;i <= k / 2;i++){
            if(freq[i] != freq[k-i]) {
                return false;
            }
        }
        return true;
    }
}

-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------


//1331.


import java.util.*;

class Solution {
    public int[] arrayRankTransform(int[] arr) {
        Map<Integer, Integer> valueToRank = new HashMap<>();  // Map to store value-to-rank mapping
        int[] sortedUniqueNumbers = Arrays.stream(arr).distinct().sorted().toArray();  // Remove duplicates and sort
        
        // Assign ranks to sorted unique elements
        for (int i = 0; i < sortedUniqueNumbers.length; i++) {
            valueToRank.put(sortedUniqueNumbers[i], i + 1);
        }

        // Replace each element in the original array with its rank
        for (int i = 0; i < arr.length; i++) {
            arr[i] = valueToRank.get(arr[i]);
        }

        return arr;  // Return the updated array
    }
}

-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------


//1590.

 import java.util.HashMap;

class Solution {
    public int minSubarray(int[] nums, int p) {
        long totalSum = 0;
        for (int num : nums) {
            totalSum += num;
        }

        // Find remainder when total sum is divided by p
        int rem = (int)(totalSum % p);
        if (rem == 0) return 0; // If remainder is 0, no subarray needs to be removed

        HashMap<Integer, Integer> prefixMod = new HashMap<>();
        prefixMod.put(0, -1);  // Initialize to handle full prefix
        long prefixSum = 0;
        int minLength = nums.length;

        for (int i = 0; i < nums.length; ++i) {
            prefixSum += nums[i];
            int currentMod = (int)(prefixSum % p);
            int targetMod = (currentMod - rem + p) % p;

            if (prefixMod.containsKey(targetMod)) {
                minLength = Math.min(minLength, i - prefixMod.get(targetMod));
            }

            prefixMod.put(currentMod, i);
        }

        return minLength == nums.length ? -1 : minLength;
    }
}

-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------


//2491.
import java.util.Arrays;

class Solution {
    public long dividePlayers(int[] skill) {
        // Step 1: Sort the skill array
        Arrays.sort(skill);
        
        int n = skill.length;
        int totalSkill = skill[0] + skill[n - 1]; // Required sum for each pair
        long chemistrySum = 0;

        // Step 2: Pair players using two pointers
        for (int i = 0; i < n / 2; i++) {
            // Check if the sum of current pair matches the required totalSkill
            if (skill[i] + skill[n - i - 1] != totalSkill) {
                return -1; // Invalid configuration, return -1
            }
            // Calculate the chemistry (product of pair) and add it to the sum
            chemistrySum += (long) skill[i] * skill[n - i - 1];
        }

        return chemistrySum; // Return total chemistry
    }
}



-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------



 //567.

 class Solution {
    public boolean checkInclusion(String s1, String s2) {
        if (s1.length() > s2.length()) return false;

        int[] s1Count = new int[26];
        int[] s2Count = new int[26];

        // Count the frequency of characters in s1 and the first window of s2
        for (int i = 0; i < s1.length(); i++) {
            s1Count[s1.charAt(i) - 'a']++;
            s2Count[s2.charAt(i) - 'a']++;
        }

        // Slide the window over s2
        for (int i = 0; i < s2.length() - s1.length(); i++) {
            if (matches(s1Count, s2Count)) return true;
            // Update the window
            s2Count[s2.charAt(i) - 'a']--;
            s2Count[s2.charAt(i + s1.length()) - 'a']++;
        }

        // Check the last window
        return matches(s1Count, s2Count);
    }

    private boolean matches(int[] s1Count, int[] s2Count) {
        for (int i = 0; i < 26; i++) {
            if (s1Count[i] != s2Count[i]) return false;
        }
        return true;
    }
}


-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------


 //1813.

 class Solution {

    // Helper function to split a sentence into words
    private String[] splitWords(String sentence) {
        return sentence.split(" ");
    }

    public boolean areSentencesSimilar(String sentence1, String sentence2) {
        // Split both sentences into arrays of words
        String[] words1 = splitWords(sentence1);
        String[] words2 = splitWords(sentence2);

        // Ensure words1 is the longer sentence
        if (words1.length < words2.length) {
            String[] temp = words1;
            words1 = words2;
            words2 = temp;
        }

        int start = 0, end = 0;
        int n1 = words1.length, n2 = words2.length;

        // Compare from the start
        while (start < n2 && words1[start].equals(words2[start])) {
            start++;
        }

        // Compare from the end
        while (end < n2 && words1[n1 - end - 1].equals(words2[n2 - end - 1])) {
            end++;
        }

        // Check if the remaining unmatched part is in the middle
        return start + end >= n2;
    }
}

-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------

//2696
class Solution {
    public int minLength(String s) {
        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            char cur_char = s.charAt(i);

            if (stack.isEmpty()) {
                stack.push(cur_char);
                continue;
            }
      
            if (cur_char == 'B' && stack.peek() == 'A') {
                stack.pop();
            }
            else if (cur_char == 'D' && stack.peek() == 'C') {
                stack.pop();
            }
            else {
                stack.push(cur_char);
            }
        }

        return stack.size();
    }
}


-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------

//1963.

 class Solution {
    public int minSwaps(String s) {
        int size = 0;
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (ch == '[') 
                size++;
            else if (size > 0) 
                size--;
        }
        return (size + 1) / 2;
    }
}



-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------


//921
 class Solution {
    public int minAddToMakeValid(String s) {
    int open =0, mismatch=0;
    for(int i=0; i<s.length(); i++)
    {
     if(s.charAt(i)=='(')
     open++;
     else
     {
        if(open>0)
        open--;
        else
        mismatch++;
     }
    } 
     return open+mismatch;   
    }
}


-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------



//962.
class Solution {
    public int maxWidthRamp(int[] nums) {
        int n = nums.length;
        Stack<Integer> stack = new Stack<>();
        
        // Step 1: Build a decreasing stack of indices
        for (int i = 0; i < n; ++i) {
            if (stack.isEmpty() || nums[stack.peek()] > nums[i]) {
                stack.push(i);
            }
        }
        
        int maxWidth = 0;
        
        // Step 2: Traverse from the end and find maximum width ramp
        for (int j = n - 1; j >= 0; --j) {
            while (!stack.isEmpty() && nums[stack.peek()] <= nums[j]) {
                maxWidth = Math.max(maxWidth, j - stack.pop());
            }
        }
        
        return maxWidth;
    }
}

-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------
//1942.
class Solution {
    public int smallestChair(int[][] times, int targetFriend) {
        int n = times.length;
        Integer[] order = new Integer[n];
        
        for (int i = 0; i < n; i++) order[i] = i;

        Arrays.sort(order, (a, b) -> Integer.compare(times[a][0], times[b][0]));

        PriorityQueue<Integer> emptySeats = new PriorityQueue<>();
        PriorityQueue<int[]> takenSeats = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));

        for (int i = 0; i < n; i++) emptySeats.offer(i);

        for (int i : order) {
            int arrival = times[i][0], leave = times[i][1];

            while (!takenSeats.isEmpty() && takenSeats.peek()[0] <= arrival) {
                emptySeats.offer(takenSeats.poll()[1]);
            }

            int seat = emptySeats.poll();

            if (i == targetFriend) return seat;

            takenSeats.offer(new int[]{leave, seat});
        }

        return -1;
    }
}



-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------


class Solution {
    public int minGroups(int[][] intervals) {
        int n = intervals.length;
        int[] start_times = new int[n];
        int[] end_times = new int[n];

        // Extract start and end times
        for (int i = 0; i < n; i++) {
            start_times[i] = intervals[i][0];
            end_times[i] = intervals[i][1];
        }

        // Sort start and end times
        Arrays.sort(start_times);
        Arrays.sort(end_times);

        int end_ptr = 0, group_count = 0;

        // Traverse through the start times
        for (int start : start_times) {
            if (start > end_times[end_ptr]) {
                end_ptr++;
            } else {
                group_count++;
            }
        }

        return group_count;
    }
}



-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------



class Solution {
    public int[] smallestRange(List<List<Integer>> nums) {
        // Min-Heap: stores (value, list index, element index)
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        int curMax = Integer.MIN_VALUE;

        // Initialize the heap with the first element of each list
        for (int i = 0; i < nums.size(); i++) {
            minHeap.offer(new int[]{nums.get(i).get(0), i, 0});
            curMax = Math.max(curMax, nums.get(i).get(0));
        }

        // Track the smallest range
        int[] smallRange = new int[]{0, Integer.MAX_VALUE};

        while (true) {
            // Get the minimum element from the heap
            int[] curr = minHeap.poll();
            int curMin = curr[0], listIdx = curr[1], elemIdx = curr[2];

            // Update the smallest range if a better one is found
            if ((curMax - curMin < smallRange[1] - smallRange[0]) ||
                (curMax - curMin == smallRange[1] - smallRange[0] && curMin < smallRange[0])) {
                smallRange[0] = curMin;
                smallRange[1] = curMax;
            }

            // Move to the next element in the same list
            if (elemIdx + 1 < nums.get(listIdx).size()) {
                int nextVal = nums.get(listIdx).get(elemIdx + 1);
                minHeap.offer(new int[]{nextVal, listIdx, elemIdx + 1});
                curMax = Math.max(curMax, nextVal);
            } else {
                // If any list is exhausted, stop
                break;
            }
        }
        return smallRange;
    }
}


-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------



//2530.
 class Solution {
    public long maxKelements(int[] nums, int k) {
    PriorityQueue<Integer>pq = new PriorityQueue<>((a, b)->b-a);
    for(int x : nums)
    pq.offer(x);
    long score = 0; 
    while(!pq.isEmpty() && k>0)
    {
      score +=pq.peek();
      int x = (int)Math.ceil(pq.poll()/3.0);
      pq.add(x);
      k--;
    }
     return score;
    }
}
-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------

//2938.
 class Solution {
    public long minimumSteps(String s) {
        long swap = 0;
        int black = 0; 
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '0') 
                swap += (long) black; 
            else
                black++; 
        }
        return swap;
    }
}


-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------


//1405.
 import java.util.PriorityQueue;

class Solution {
    public String longestDiverseString(int a, int b, int c) {
        // Priority queue to store the characters and their counts.
        PriorityQueue<int[]> pq = new PriorityQueue<>((x, y) -> y[0] - x[0]);
        if (a > 0) pq.offer(new int[]{a, 'a'});
        if (b > 0) pq.offer(new int[]{b, 'b'});
        if (c > 0) pq.offer(new int[]{c, 'c'});

        StringBuilder result = new StringBuilder();

        while (!pq.isEmpty()) {
            int[] first = pq.poll();

            // Check if last two characters are the same.
            if (result.length() >= 2 && result.charAt(result.length() - 1) == first[1] &&
                result.charAt(result.length() - 2) == first[1]) {

                if (pq.isEmpty()) break;  // No more valid characters.

                // Pick the second character.
                int[] second = pq.poll();
                result.append((char) second[1]);
                second[0]--;

                if (second[0] > 0) pq.offer(second);
                pq.offer(first);
            } else {
                result.append((char) first[1]);
                first[0]--;

                if (first[0] > 0) pq.offer(first);
            }
        }

        return result.toString();
    }
}



-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------


//670.
 class Solution {
    public int maximumSwap(int num) {
        // Convert number to string for digit manipulation
        char[] numArr = Integer.toString(num).toCharArray();
        int n = numArr.length;

        // Track the last occurrence of each digit (0-9)
        int[] last = new int[10];
        for (int i = 0; i < n; i++) {
            last[numArr[i] - '0'] = i;
        }

        // Traverse the number from left to right
        for (int i = 0; i < n; i++) {
            // Check if we can find a larger digit to swap
            for (int d = 9; d > numArr[i] - '0'; d--) {
                if (last[d] > i) {
                    // Swap and return the new number
                    char temp = numArr[i];
                    numArr[i] = numArr[last[d]];
                    numArr[last[d]] = temp;
                    return Integer.parseInt(new String(numArr));
                }
            }
        }

        // Return the original number if no swap occurred
        return num;
    }
}




-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------

//2044.
 class Solution {
    public void backtrack(int[] nums, int index, int currentOR, int maxOR, int[] count) {
        if (currentOR == maxOR) {
            count[0]++;
        }

        for (int i = index; i < nums.length; i++) {
            backtrack(nums, i + 1, currentOR | nums[i], maxOR, count);
        }
    }

    public int countMaxOrSubsets(int[] nums) {
        int maxOR = 0;

        // Step 1: Compute the maximum OR
        for (int num : nums) {
            maxOR |= num;
        }

        int[] count = new int[1];
        // Step 2: Backtrack to count the subsets
        backtrack(nums, 0, 0, maxOR, count);

        return count[0];
    }
}

-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------

//1545.
 class Solution {
    public char findKthBit(int n, int k) {
        // Base case: When n = 1, the binary string is "0"
        if (n == 1) return '0';
        
        // Find the length of the current string Sn, which is 2^n - 1
        int length = (1 << n) - 1;
        
        // Find the middle position
        int mid = length / 2 + 1;
        
        // If k is the middle position, return '1'
        if (k == mid) return '1';
        
        // If k is in the first half, find the bit in Sn-1
        if (k < mid) return findKthBit(n - 1, k);
        
        // If k is in the second half, find the bit in Sn-1 and invert it
        return findKthBit(n - 1, length - k + 1) == '0' ? '1' : '0';
    }
}


-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------

//1593.
 class Solution {
    public int maxUniqueSplit(String s) {
        return backtrack(0, s, new HashSet<>());
    }
    private int backtrack(int start, String s, HashSet<String> seen) {
        if (start == s.length()) {
            return 0; 
        }
        int maxSplits = 0;
        for (int end = start + 1; end <= s.length(); end++) {
            String substring = s.substring(start, end);
            if (!seen.contains(substring)) {
                seen.add(substring); 
                maxSplits = Math.max(maxSplits, 1 + backtrack(end, s, seen));
                seen.remove(substring);
            }
        }
        return maxSplits;
    }
}




-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------

//2583.
 class Solution {
    public long kthLargestLevelSum(TreeNode root, int k) {
        List<Long> res = new ArrayList<>();  // To store sum of each level
        Queue<TreeNode> q = new LinkedList<>();  // Queue for level-order traversal
        q.add(root);  // Start BFS from the root node

        while (!q.isEmpty()) {
            int n = q.size();  // Number of nodes at the current level
            long sum = 0;  // Sum of node values at the current level
            
            for (int i = 0; i < n; i++) {
                TreeNode node = q.poll();
                sum += node.val;
                
                if (node.left != null) q.add(node.left);
                if (node.right != null) q.add(node.right);
            }
            res.add(sum);  // Store the sum of the current level
        }

        if (k > res.size()) return -1;
        
        res.sort(Collections.reverseOrder());  // Sort level sums in descending order
        
        return res.get(k - 1);  // Return the k-th largest sum
    }
}



-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------

//2641.

 class Solution {
    public TreeNode replaceValueInTree(TreeNode root) {
        dfs(new TreeNode[] {root});
        root.val = 0;
        return root;
    }

    private void dfs(TreeNode[] arr) {
        if (arr.length == 0) return;

        int sum = 0;
        for (TreeNode node : arr) {
            if (node == null) continue;
            if (node.left != null) sum += node.left.val;
            if (node.right != null) sum += node.right.val;
        }

        TreeNode[] childArr = new TreeNode[arr.length * 2];
        int index = 0;

        for (TreeNode node : arr) {
            int curSum = 0;
            if (node.left != null) curSum += node.left.val;
            if (node.right != null) curSum += node.right.val;

            if (node.left != null) {
                node.left.val = sum - curSum;
                childArr[index++] = node.left;
            }
            if (node.right != null) {
                node.right.val = sum - curSum;
                childArr[index++] = node.right;
            }
        }

        dfs(java.util.Arrays.copyOf(childArr, index));
    }
}




-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------

//951.

 class Solution {
    public boolean flipEquiv(TreeNode root1, TreeNode root2) {
        
        return checker(root1, root2);
    }

    private boolean checker(TreeNode node1, TreeNode node2) {
        if (node1 == null && node2 == null) {
            return true;
        }
        if (node1 == null || node2 == null || node1.val != node2.val) {
            return false;
        }

        return (checker(node1.left, node2.left) || checker(node1.left, node2.right)) &&
               (checker(node1.right, node2.right) || checker(node1.right, node2.left));
    }
}




-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------




-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------







-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------





-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------






-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------





-----------------------------------------------------------------------------------------------------------
 
-----------------------------------------------------------------------------------------------------------
