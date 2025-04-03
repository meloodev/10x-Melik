////////////////////////////////////////////////////////////////////////////
// 1. The Sorting Hat (Harry Potter)
// Hogwarts needs a digital Sorting Hat! Create an array of student names and randomly assign them to one of the four houses using the `map()` method.

const students = ['Harry', 'Hermione', 'Ron', 'Draco'];
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

const sortedStudents = students.map(student => {
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    return `${student} - ${randomHouse}`;
});

console.log(sortedStudents);
////////////////////////////////////////////////////////////////////////////
// 2. The Pokémon Filter
// Given an array of Pokémon with their combat power (CP), filter out Pokémon with CP less than 500 using the `filter()` method.
const pokemons = [
    { name: 'Pikachu', CP: 320 },
    { name: 'Charizard', CP: 900 }
];
const strongPokemons = pokemons.filter(pokemon => pokemon.CP >= 500);
console.log(strongPokemons);
////////////////////////////////////////////////////////////////////////////
// 3. Avengers Assemble (Reduce)
// The Avengers need funding. Use the `reduce()` method to sum up the total budget required for each Avenger’s mission.
const assemble = [{ hero: 'Iron Man', budget: 5000 }, { hero: 'Hulk', budget: 2000 }];
const total = assemble.reduce((acc, item) => {
    return acc + item.budget;
}, 0);

console.log(`total budget: ${total}`);

////////////////////////////////////////////////////////////////////////////
// 4. The Lost Treasure Map
// A pirate captain needs help finding treasure! Convert an array of directions into a list of formatted instructions using `map()`.
// Example input: `['left', 'right', 'forward']`
// Expected output: `['Move left', 'Move right', 'Move forward']`
const dirArr = ['left', 'right', 'forward'];
const formatted = dirArr.map((item) => {
    return 'Move ' + item;
});
console.log(formatted);

////////////////////////////////////////////////////////////////////////////
// 5. The Jedi Archives
// Create an array of Jedi names and search for 'Yoda' using the `find()` method. If found, return ‘Master found!’
// Example input: `['Luke', 'Obi-Wan', 'Yoda', 'Anakin']`
// Expected output: `'Master found!'`
const arr = ['Luke', 'Obi-Wan', 'Yoda', 'Anakin'];
let elem = arr.find((item) => item === 'Yoda');

if (elem) {
    console.log('Master found!');
} else {
    console.log('Master not found!');
}

////////////////////////////////////////////////////////////////////////////
// 6. The One Ring Inventory
// Frodo needs to keep track of his inventory. Implement an array where items can be added with `push()` and removed with `pop()`.
// Example actions: `push('Lembas Bread')`, `push('Ring')`, `pop()`
// Expected output: `['Lembas Bread']`
let inventory = [];
inventory.push('Lembas Bread');
inventory.push('Ring');
inventory.pop();
console.log(inventory);
////////////////////////////////////////////////////////////////////////////
// 7. Spider-Man’s Web of Crime
// Given an array of crime locations, sort them alphabetically using `sort()`.
// Example input: `['Times Square', 'Central Park', 'Brooklyn']`
// Expected output: `['Brooklyn', 'Central Park', 'Times Square']`
const spider = ['Times Square', 'Central Park', 'Brooklyn'];
spider.sort((a, b) => {
    if (a < b) {
        return -1;
    }

    if (a > b) {
        return 1;
    }

    return 0;
});

console.log(spider);

////////////////////////////////////////////////////////////////////////////
//8. The Time Stone (Array Slicing)
// Doctor Strange wants to revisit only the last 3 events from an array of mystical occurrences. Use `slice()` to retrieve them.
// Example input: `[ 'Dormammu Attack', 'Multiverse Glitch', 'Ancient One’s Warning', 'Time Loop', 'Portal Opening' ]`
// Expected output: `['Ancient One’s Warning', 'Time Loop', 'Portal Opening']`
const mystic = ['Dormammu Attack', 'Multiverse Glitch', 'Ancient One’s Warning', 'Time Loop', 'Portal Opening'];

console.log(mystic.slice(-3));

////////////////////////////////////////////////////////////////////////////
// 9. Matrix Reloaded: Data Processing
// A hacker needs to process data from the Matrix. Given an array of numbers, transform each into binary format using `map()`, and then find the highest value using `reduce()`.
// Example input: `[3, 7, 15, 22]`
// Expected output (binary conversion): `['11', '111', '1111', '10110']`
// Expected output (highest value): `22`

// let num = 15;
// console.log(num.toString(2));
const matrixArr = [3, 7, 15, 22];

let matrix = matrixArr.map((item) => item.toString(2));

let maxNum = Math.max(...matrix.map((item) => {
    return parseInt(item, 2);
}));

console.log(`(highest value): ${maxNum}`);
////////////////////////////////////////////////////////////////////////////
// 10. Cyberpunk City Data Processing
// A cyber-detective is analyzing risk levels in a futuristic city. Use multiple array methods to process the risk levels.
// 1. Use `map()` to convert each risk level to hexadecimal.
// 2. Use `filter()` to extract levels above 100.
// 3. Use `reduce()` to calculate the total risk level.
// 4. Use `find()` to locate the first risk level above 150.
// 5. Use `splice()` to remove corrupt data (risk levels below 80).


let riskLevels = [99, 135, 76, 200, 150, 89];

let hexValues = riskLevels.map(level => level.toString(16));
let highRisks = riskLevels.filter(level => level > 100);
let totalRisk = riskLevels.reduce((sum, level) => sum + level, 0);
let firstHighRisk = riskLevels.find(level => level > 150);

for (let i = riskLevels.length - 1; i >= 0; i--) {
    if (riskLevels[i] < 80) {
        riskLevels.splice(i, 1);
    }
}

console.log("Hex values:", hexValues);
console.log("Filtered high risks:", highRisks);
console.log("Total risk level:", totalRisk);
console.log("First risk above 150:", firstHighRisk);
console.log("Cleaned data (after removing <80):", riskLevels);




