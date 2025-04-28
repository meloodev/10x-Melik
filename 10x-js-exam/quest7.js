// Quest 7 – System Health Check Difficulty: Easy (2 pts) Story The Grid’s CPU and memory 
// modules report their status. You must verify overall system health. Objective Combine two 
// boolean statuses and report if the system is OK. Instructions Name your file quest7.js Create 
// a constant cpuStatus and assign it the value true Create a constant memoryStatus and assign 
// it the value true Create a constant systemOk that uses logical AND between cpuStatus and 
// memoryStatus Print the exact sentence System OK: true Acceptance Criteria cpuStatus and 
// memoryStatus are defined as constants with value true systemOk is defined as a constant using 
// logical AND of cpuStatus and memoryStatus The console shows exactly: System OK: true

//////////////////////////////////

const MemoryStatus = true;
const cpuStatus = true;

const systemOk = MemoryStatus && cpuStatus;
console.log('System OK: ' + systemOk);

