// Quest 4 – Directional Routing Difficulty: Easy (2 pts) Story The Grid’s traffic must be 
// directed along the X-axis. Decide your route based on coordinate. Objective Use an if/else 
// statement to determine and print the correct direction. Instructions Name your file quest4.js 
// Define a variable xCoordinate with value -3 If xCoordinate is less than 0, print the exact 
// sentence Route: West Otherwise, print Route: East Acceptance Criteria xCoordinate is defined 
// as a variable with value -3 The console shows exactly: Route: West 


////////////////////////////////////////////////////

const log = console.log;
const xCoordinate = -3;

if (xCoordinate < 0) {
    log('Route: West');
} else {
    log('Route: East');
}