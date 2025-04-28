// Quest 20 – Quick Double Difficulty: Easy (2 pts) Story Speed matters in the Grid. You need 
// a quick function to double values. Objective Declare an arrow function that doubles a 
// number and use it. Instructions Name your file quest20.js Create a constant called double 
// that is an arrow function taking one argument and returning its value times two Create a 
// constant called result by calling double with the number 5 Print the exact sentence 
// Result: 10 Acceptance Criteria double is defined as an arrow function accepting one 
// parameter and returning its value multiplied by two result is defined as a constant equal 
// to double(5) The console shows exactly: Result: 10

/////////////////////////////////////////////


const double = (num) => num * 2;
const result = double(5);
console.log(`Result: ${result}`);