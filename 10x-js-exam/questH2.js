// Quest H2 – Diagnostic Sweep Difficulty: Hard (5 pts) Story Critical node stats arrive as an 
// object. You must compute the overall health score to advise engineers. Objective Write a 
// function that reads an object’s numeric values, averages them, and reports the result. 
// Instructions Name your file questH2.js Create a constant named diagnostics and assign it 
// an object with properties cpu: 80, memory: 70, disk: 90 Declare a function named calcAverage 
// that takes one parameter stats and uses a for…in loop to sum all values in stats, divides by 
// the number of keys, and returns the result Call calcAverage with diagnostics and store the 
// result in a constant named avgHealth Use console.log to print exactly Average health: 80 
// Acceptance Criteria diagnostics is defined as a constant object with cpu 80, memory 70, 
// disk 90 calcAverage correctly loops over stats and returns 80 avgHealth holds the value 80 
// The console shows exactly: Average health: 80

/////////////////////////////////////

const obj = {
    cpu: 80,
    memory: 70,
    disk: 90
}

function calcAverage(data) {
    let avgHealth = 0;
    let length = Object.keys(data).length;
    for (item in data) {
        avgHealth += data[item];
    }
    return avgHealth / length;
}

console.log('Average health: ' + calcAverage(obj));