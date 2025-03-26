// Coding Challenge #1 
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter). 

// Your tasks: 
// 1. Store Mark's and John's mass and height in variables 
// 2. Calculate both their BMIs using the formula (you can even implement both versions) 
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John. 

// Test data 1
let markMass = 78; // kg
let markHeight = 1.69; // m
let johnMass = 92; // kg
let johnHeight = 1.95; // m

let markBMI = (markMass / (markHeight * markHeight)).toFixed(3);
let johnBMI = (johnMass / (johnHeight * johnHeight)).toFixed(3);

let markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI: ", markBMI);
console.log("John's BMI: ", johnBMI);
console.log("Is Mark's BMI higher than John's? ", markHigherBMI);

// Test data 2
markMass = 95; // kg
markHeight = 1.88; // m
johnMass = 85; // kg
johnHeight = 1.76; // m

markBMI = (markMass / (markHeight * markHeight)).toFixed(3);
johnBMI = (johnMass / (johnHeight * johnHeight)).toFixed(3);

markHigherBMI = markBMI > johnBMI;

console.log("Mark's BMI: ", markBMI);
console.log("John's BMI: ", johnBMI);
console.log("Is Mark's BMI higher than John's? ", markHigherBMI);

///////////////////////////////////////////////////////////////////////////////
//Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it. 

// Your tasks: 
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!" 
// Hint: Use an if/else statement

// Test data 1
let markMass1 = 78; // kg
let markHeight1 = 1.69; // m
let johnMass1 = 92; // kg
let johnHeight1 = 1.95; // m

let markBMI1 = markMass1 / (markHeight1 * markHeight1);
let johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

markBMI1 = markBMI1.toFixed(3);
johnBMI1 = johnBMI1.toFixed(3);

if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})!`);
} else if (markBMI1 < johnBMI1) {
    console.log(`John's BMI (${johnBMI1}) is higher than Mark's (${markBMI1})!`);
} else {
    console.log(`Mark and John have the same BMI (${markBMI1})!`);
}

// Test data 2
let markMass2 = 95; // kg
let markHeight2 = 1.88; // m
let johnMass2 = 85; // kg
let johnHeight2 = 1.76; // m

let markBMI2 = markMass2 / (markHeight2 * markHeight2);
let johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

markBMI2 = markBMI2.toFixed(3);
johnBMI2 = johnBMI2.toFixed(3);

if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})!`);
} else if (markBMI2 < johnBMI2) {
    console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})!`);
} else {
    console.log(`Mark and John have the same BMI (${markBMI2})!`);
}
///////////////////////////////////////////////////////////////////////////////
//Coding Challenge #3 
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy! 

// Your tasks: 
// 1. Calculate the average score for each team, using the test data below 
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score) 
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
// Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy 

// Test data: 
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106



//average score
function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

// Test Data 1
let dolphinsAvg = calcAverage(96, 108, 89);
let koalasAvg = calcAverage(88, 91, 110);

console.log(`Dolphins Average: ${dolphinsAvg.toFixed(2)}`);
console.log(`Koalas Average: ${koalasAvg.toFixed(2)}`);

if (dolphinsAvg > koalasAvg) {
    console.log("Dolphins win the trophy!");
} else if (koalasAvg > dolphinsAvg) {
    console.log("Koalas win the trophy!");
} else {
    console.log("It's a draw!");
}

function determineWinner(dolphinsAvg, koalasAvg) {
    const minScore = 100;

    if (dolphinsAvg >= minScore && dolphinsAvg > koalasAvg) {
        console.log("Dolphins win the trophy!");
    } else if (koalasAvg >= minScore && koalasAvg > dolphinsAvg) {
        console.log("Koalas win the trophy!");
    } else if (dolphinsAvg >= minScore && koalasAvg >= minScore && dolphinsAvg === koalasAvg) {
        console.log("It's a draw, and both teams qualify!");
    } else {
        console.log("No team wins the trophy.");
    }
}

// Test Data Bonus 1
console.log("\nBonus 1:");
dolphinsAvg = calcAverage(97, 112, 101);
koalasAvg = calcAverage(109, 95, 123);
console.log(`Dolphins Average: ${dolphinsAvg.toFixed(2)}`);
console.log(`Koalas Average: ${koalasAvg.toFixed(2)}`);
determineWinner(dolphinsAvg, koalasAvg);

// Test Data Bonus 2
console.log("\nBonus 2:");
dolphinsAvg = calcAverage(97, 112, 101);
koalasAvg = calcAverage(109, 95, 106);
console.log(`Dolphins Average: ${dolphinsAvg.toFixed(2)}`);
console.log(`Koalas Average: ${koalasAvg.toFixed(2)}`);
determineWinner(dolphinsAvg, koalasAvg);

///////////////////////////////////////////////////////////////////////////////
//Coding Challenge #4 
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%. 

// Your tasks: 
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!) 
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25” 

// Test data: 
// Data 1: Test for bill values 275, 40 and 430 
// Hints: 
// To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
// Value X is between 50 and 300, if it's >= 50 && <= 300

function calculateTip(bill) {
    let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    let total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
}

// Test data
calculateTip(275);
calculateTip(40);
calculateTip(430);

///////////////////////////////////////////////////////////////////////////////
// Coding Challenge #5 Dynamic Calculator
// Write a function calculate(a, b, operator) that takes two numbers and an operator (+, -, *, /, %, **).
// Use a switch statement to perform the calculation.
// Handle division by zero properly.
// If an invalid operator is passed, return "Invalid operator"

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : "Error: Division by zero";
        case '%':
            return b !== 0 ? a % b : "Error: Division by zero";
        case '**':
            return a ** b;
        default:
            return "Invalid operator";
    }
}

// Test cases
console.log(calculate(10, 5, '+'));
console.log(calculate(10, 5, '-'));
console.log(calculate(10, 5, '*'));
console.log(calculate(10, 5, '/'));
console.log(calculate(10, 5, '%'));
console.log(calculate(2, 3, '**'));
console.log(calculate(10, 0, '/'));
console.log(calculate(10, 0, '%'));
console.log(calculate(10, 5, '&'));

///////////////////////////////////////////////////////////////////////////////
//Coding Challenge #5 Rock, Paper, Scissors
// Write a function playGame(player1, player2) that determines the winner of a rock-paper-scissors game.
// "rock" beats "scissors"
// "scissors" beats "paper"
// "paper" beats "rock"
// If both players choose the same, return "It's a tie!".
// If an invalid choice is entered, return "Invalid move".

function playGame(player1, player2) {
    const validMoves = ["rock", "paper", "scissors"];

    if (!validMoves.includes(player1) || !validMoves.includes(player2)) {
        return "Invalid move";
    }

    if (player1 === player2) {
        return "It's a tie!";
    }

    if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "scissors" && player2 === "paper") ||
        (player1 === "paper" && player2 === "rock")
    ) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}

// Test cases
console.log(playGame("rock", "scissors")); 
console.log(playGame("scissors", "paper"));
console.log(playGame("paper", "rock"));
console.log(playGame("scissors", "rock")); 
console.log(playGame("paper", "scissors")); 
console.log(playGame("rock", "paper"));
console.log(playGame("rock", "rock")); 
console.log(playGame("paper", "paper")); 
console.log(playGame("scissors", "scissors")); 
console.log(playGame("rock", "fire"));
console.log(playGame("water", "scissors"));

///////////////////////////////////////////////////////////////////////////////
//Coding Challenge #6 Triangle Type Detector
// Write a function triangleType(a, b, c) that:
// Returns "Equilateral" if all three sides are equal.
// Returns "Isosceles" if exactly two sides are equal.
// Returns "Scalene" if all three sides are different.
// Returns "Not a triangle" if the sides do not form a valid triangle (i.e., the sum of any two sides must be greater than the third).

function triangleType(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Not a triangle";
    }

    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || a === c || b === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

console.log(triangleType(3, 3, 3)); 
console.log(triangleType(3, 3, 5));
console.log(triangleType(3, 4, 5));
console.log(triangleType(1, 2, 3));
console.log(triangleType(7, 10, 5));
console.log(triangleType(5, 5, 10));

///////////////////////////////////////////////////////////////////////////////
// Coding Challenge #7 Bank Transaction System
// Write a function processTransaction(balance, amount, transactionType) that:
// If transactionType === "withdraw" and amount <= balance, deduct the amount and return the new balance.
// If transactionType === "withdraw" but amount > balance, return "Insufficient funds".
// If transactionType === "deposit", add the amount and return the new balance.
// If transactionType is neither "withdraw" nor "deposit", return "Invalid transaction type".

function processTransaction(balance, amount, transactionType) {
    switch (transactionType) {
        case "withdraw":
            if (amount <= balance) {
                balance -= amount;
                return balance;
            } else {
                return "Insufficient funds";
            }
        case "deposit":
            balance += amount;
            return balance;
        default:
            return "Invalid transaction type";
    }
}

// Test cases
console.log(processTransaction(500, 200, "withdraw"));
console.log(processTransaction(500, 600, "withdraw"));
console.log(processTransaction(500, 200, "deposit"));
console.log(processTransaction(500, 200, "transfer"));

/////////////////////////////////////////////////////////////////////
// Coding Challenge #7 Hotel Room Pricing System
// Write a function getRoomPrice(type, isWeekend, hasDiscount) that:
// "Standard" costs $100 on weekdays, $120 on weekends.
// "Deluxe" costs $150 on weekdays, $180 on weekends.
// "Suite" costs $200 on weekdays, $250 on weekends.
// If hasDiscount === true, apply a 10% discount.

function getRoomPrice(type, isWeekend, hasDiscount) {
    let price;

    switch (type) {
        case "Standard":
            price = isWeekend ? 120 : 100;
            break;
        case "Deluxe":
            price = isWeekend ? 180 : 150;
            break;
        case "Suite":
            price = isWeekend ? 250 : 200;
            break;
        default:
            return "Invalid room type";
    }

    if (hasDiscount) {
        price *= 0.9; // 10% discount
    }

    return price;
}

// Test cases
console.log(getRoomPrice("Standard", false, false));
console.log(getRoomPrice("Standard", true, false));  
console.log(getRoomPrice("Deluxe", false, true));  
console.log(getRoomPrice("Deluxe", true, true));    
console.log(getRoomPrice("Suite", false, false)); 
console.log(getRoomPrice("Suite", true, true)); 
console.log(getRoomPrice("Penthouse", false, false));
/////////////////////////////////////////////////////////////////////////////////////





