// Quest 16 – Countdown to Breach Difficulty: Easy (2 pts) Story The Firewall breach initiates 
// in five seconds. You must count down to zero. Objective Use a while loop to log each second 
// remaining. Instructions Name your file quest16.js Create a variable timer and set it to 5 
// Use a while loop that runs as long as timer is greater than 0 Inside the loop, print the 
// exact sentence T-minus <timer> Decrease timer by 1 each iteration Acceptance Criteria 
// timer starts at 5 The console shows exactly: T-minus 5 T-minus 4 T-minus 3 T-minus 2 
// T-minus 1 Loop ends when timer reaches 0 

/////////////////////////////////////////////
let timer = 5;
while (timer >= 0) {
    console.log(`T-minus ${timer}`);
    timer--;
}