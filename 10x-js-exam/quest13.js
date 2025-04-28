// Quest 13 – Validate Sector Parity Difficulty: Easy (2 pts) Story Certain sectors are 
// odd-security. You must check if Sector 8 is even to decide safe routing. Objective Use 
// the remainder operator to test if a sector number is even or odd. Instructions Name your 
// file quest13.js Create a constant sectorNumber and set it to 8 Create a constant parity 
// that is "Even" if sectorNumber modulo 2 equals 0, otherwise "Odd" Print the exact sentence 
// Sector 8 is Even Acceptance Criteria sectorNumber is defined as a constant with value 8 parity 
// is defined as a constant using the modulo operator The console shows exactly: Sector 8 is Even

/////////////////////////////////////////////////
const sectorNumber  = 8;

const log = console.log;
const result = sectorNumber  % 2 === 0;
let res = result ? 'even' : 'odd';
log(`sector ${sectorNumber } is ${res}`);

