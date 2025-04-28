// Quest H5 – Node Processor Callback Difficulty: Hard (5 pts) Story Batch processing of 
// nodes uses a callback to log each completion. Objective Implement a function that accepts 
// an array and a callback, then applies the callback to each item. Instructions Name your 
// file questH5.js Create a constant named nodes and assign it the 
// array ['node1', 'node2', 'node3'] Declare a function named processNodes that takes two 
// parameters (list, callback) and uses a for…of loop to call callback(item) for each item in 
// list Call processNodes with nodes and a callback that uses console.log to print exactly 
// Processed: node1 Processed: node2 Processed: node3 Acceptance Criteria nodes is defined as a 
// constant array with three entries processNodes loops through each entry and invokes the 
// callback The console shows exactly: Processed: node1 Processed: node2 Processed: node3

///////////////////////////////////////////////
const arr = ['node1', 'node2', 'node3'];

function fn(item) {
    console.log('Processed: ' + item);
}

function processNodes(arr, fn) {
    for (const item of arr) {
        fn(item);
    }
}

processNodes(arr, fn);
