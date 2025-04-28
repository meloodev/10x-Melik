// Quest 10 – Node Registry Count Difficulty: Easy (2 pts) Story You need a quick count of 
// registered nodes to allocate resources. Objective Create an array of node names and display 
// its length. Instructions Name your file quest10.js Create a constant nodes and assign it 
// the array [node1, node2, node3, node4] Create a constant totalNodes that equals the length 
// of nodes Print the exact sentence Total nodes: 4 Acceptance Criteria nodes is defined as a 
// constant array with four entries totalNodes is defined as a constant using the array’s 
// length The console shows exactly: Total nodes: 4 

////////////////////////////////////////////////////////
const nodes = ['node1', 'node2', 'node3', 'node4'];
const totalNodes = nodes.length;
console.log('Total nodes: ' + totalNodes);