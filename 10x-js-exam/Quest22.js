// Quest 22 – Filter Active Nodes Difficulty: Medium (3 pts) Story The Grid has mixed active 
// and inactive nodes. You need to isolate the active ones for diagnostics and report them. 
// Objective Use array filtering and a helper function to extract active nodes, then format 
// their names for display. Instructions Name your file quest22.js Create a constant nodeList 
// and assign it the array of three objects with properties name 
// and active: { name: 'node1', active: true } { name: 'node2', active: false } 
// { name: 'node3', active: true } Declare a function getActiveNodes that takes one 
// parameter (a list) and returns a new array containing only the objects where active is 
// true Call getActiveNodes with nodeList and store the result in activeNodes Create a constant displayString by mapping activeNodes to their name values and joining them with commas Print the exact sentence Active nodes: node1, node3 Acceptance Criteria nodeList is defined as a constant array with the three specified objects getActiveNodes correctly filters out inactive entries activeNodes holds only the objects for node1 and node3 displayString equals node1, node3 The console shows exactly: Active nodes: node1, node3

/////////////////////////////////////////////////////
const arr = [
    { name: 'node1', active: true },
    { name: 'node2', active: false },
    { name: 'node3', active: true },

];

const log = console.log;

const result = [];
arr.forEach((item) => {
    if (item.active) {
        result.push(item.name);
    }
});

log('Active nodes: ' + result.join(', '));

//Active nodes: node1, node3
